// To parse this data:
//
//   import { Convert, GeoVenezuela } from "./file";
//
//   const GeoVenezuela = Convert.toGeoVenezuela(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface GeoVenezuela {
  type:     string;
  name:     string;
  crs:      CRS;
  features: Feature[];
}

export interface CRS {
  type:       string;
  properties: CRSProperties;
}

export interface CRSProperties {
  name: string;
}

export interface Feature {
  type:       FeatureType;
  properties: FeatureProperties;
  geometry:   Geometry;
}

export interface Geometry {
  type:        GeometryType;
  coordinates: Array<Array<Array<number[]>>>;
}

export enum GeometryType {
  MultiPolygon = "MultiPolygon",
}

export interface FeatureProperties {
  GID_2:     string;
  GID_0:     Gid0;
  COUNTRY:   Country;
  GID_1:     string;
  NAME_1:    string;
  NL_NAME_1: Cc2;
  NAME_2:    string;
  VARNAME_2: Cc2;
  NL_NAME_2: Cc2;
  TYPE_2:    Type2;
  ENGTYPE_2: Engtype2;
  CC_2:      Cc2;
  HASC_2:    Cc2;
}

export enum Cc2 {
  Na = "NA",
  VeDPDP = "VE.DP.DP",
}

export enum Country {
  Venezuela = "Venezuela",
}

export enum Engtype2 {
  Islands = "Islands",
  Municipality = "Municipality",
  WaterBody = "WaterBody",
}

export enum Gid0 {
  Ven = "VEN",
}

export enum Type2 {
  Islas = "Islas",
  Municipio = "Municipio",
  WaterBody = "WaterBody",
}

export enum FeatureType {
  Feature = "Feature",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toGeoVenezuela(json: string): GeoVenezuela {
      return cast(JSON.parse(json), r("GeoVenezuela"));
  }

  public static GeoVenezuelaToJson(value: GeoVenezuela): string {
      return JSON.stringify(uncast(value, r("GeoVenezuela")), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
  const prettyTyp = prettyTypeName(typ);
  const parentText = parent ? ` on ${parent}` : '';
  const keyText = key ? ` for key "${key}"` : '';
  throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
      if (typ.length === 2 && typ[0] === undefined) {
          return `an optional ${prettyTypeName(typ[1])}`;
      } else {
          return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
      }
  } else if (typeof typ === "object" && typ.literal !== undefined) {
      return typ.literal;
  } else {
      return typeof typ;
  }
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
      const map: any = {};
      typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
      typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
      const map: any = {};
      typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
      typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
  function transformPrimitive(typ: string, val: any): any {
      if (typeof typ === typeof val) return val;
      return invalidValue(typ, val, key, parent);
  }

  function transformUnion(typs: any[], val: any): any {
      // val must validate against one typ in typs
      const l = typs.length;
      for (let i = 0; i < l; i++) {
          const typ = typs[i];
          try {
              return transform(val, typ, getProps);
          } catch (_) {}
      }
      return invalidValue(typs, val, key, parent);
  }

  function transformEnum(cases: string[], val: any): any {
      if (cases.indexOf(val) !== -1) return val;
      return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
  }

  function transformArray(typ: any, val: any): any {
      // val must be an array with no invalid elements
      if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
      return val.map(el => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
      if (val === null) {
          return null;
      }
      const d = new Date(val);
      if (isNaN(d.valueOf())) {
          return invalidValue(l("Date"), val, key, parent);
      }
      return d;
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
      if (val === null || typeof val !== "object" || Array.isArray(val)) {
          return invalidValue(l(ref || "object"), val, key, parent);
      }
      const result: any = {};
      Object.getOwnPropertyNames(props).forEach(key => {
          const prop = props[key];
          const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
          result[prop.key] = transform(v, prop.typ, getProps, key, ref);
      });
      Object.getOwnPropertyNames(val).forEach(key => {
          if (!Object.prototype.hasOwnProperty.call(props, key)) {
              result[key] = transform(val[key], additional, getProps, key, ref);
          }
      });
      return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
      if (val === null) return val;
      return invalidValue(typ, val, key, parent);
  }
  if (typ === false) return invalidValue(typ, val, key, parent);
  let ref: any = undefined;
  while (typeof typ === "object" && typ.ref !== undefined) {
      ref = typ.ref;
      typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
      return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
          : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
          : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
          : invalidValue(typ, val, key, parent);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
  return { literal: typ };
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  "GeoVenezuela": o([
      { json: "type", js: "type", typ: "" },
      { json: "name", js: "name", typ: "" },
      { json: "crs", js: "crs", typ: r("CRS") },
      { json: "features", js: "features", typ: a(r("Feature")) },
  ], false),
  "CRS": o([
      { json: "type", js: "type", typ: "" },
      { json: "properties", js: "properties", typ: r("CRSProperties") },
  ], false),
  "CRSProperties": o([
      { json: "name", js: "name", typ: "" },
  ], false),
  "Feature": o([
      { json: "type", js: "type", typ: r("FeatureType") },
      { json: "properties", js: "properties", typ: r("FeatureProperties") },
      { json: "geometry", js: "geometry", typ: r("Geometry") },
  ], false),
  "Geometry": o([
      { json: "type", js: "type", typ: r("GeometryType") },
      { json: "coordinates", js: "coordinates", typ: a(a(a(a(3.14)))) },
  ], false),
  "FeatureProperties": o([
      { json: "GID_2", js: "GID_2", typ: "" },
      { json: "GID_0", js: "GID_0", typ: r("Gid0") },
      { json: "COUNTRY", js: "COUNTRY", typ: r("Country") },
      { json: "GID_1", js: "GID_1", typ: "" },
      { json: "NAME_1", js: "NAME_1", typ: "" },
      { json: "NL_NAME_1", js: "NL_NAME_1", typ: r("Cc2") },
      { json: "NAME_2", js: "NAME_2", typ: "" },
      { json: "VARNAME_2", js: "VARNAME_2", typ: r("Cc2") },
      { json: "NL_NAME_2", js: "NL_NAME_2", typ: r("Cc2") },
      { json: "TYPE_2", js: "TYPE_2", typ: r("Type2") },
      { json: "ENGTYPE_2", js: "ENGTYPE_2", typ: r("Engtype2") },
      { json: "CC_2", js: "CC_2", typ: r("Cc2") },
      { json: "HASC_2", js: "HASC_2", typ: r("Cc2") },
  ], false),
  "GeometryType": [
      "MultiPolygon",
  ],
  "Cc2": [
      "NA",
      "VE.DP.DP",
  ],
  "Country": [
      "Venezuela",
  ],
  "Engtype2": [
      "Islands",
      "Municipality",
      "WaterBody",
  ],
  "Gid0": [
      "VEN",
  ],
  "Type2": [
      "Islas",
      "Municipio",
      "WaterBody",
  ],
  "FeatureType": [
      "Feature",
  ],
};
