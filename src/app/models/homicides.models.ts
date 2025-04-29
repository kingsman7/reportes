export class HomicidesModel {
  entity: string;
  case_file: string;
  movil: string;
  location: string;
  observation: string;

  constructor(homicides?: any) {
    this.entity = homicides.entity;
    this.case_file = homicides.case_file;
    this.movil = homicides.movil;
    this.location = homicides.location;
    this.observation = homicides.observation;
  }
}
