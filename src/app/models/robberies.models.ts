export class RobberiesModel {
  entity: string;
  case_file: string;
  kind_robberies: string;
  location: string;
  observation: string;

  /**
   *
   */
  constructor(robberies?: any) {
    this.entity = robberies.entity;
    this.case_file = robberies.case_file;
    this.kind_robberies = robberies.kind_robberies;
    this.location = robberies.location;
    this.observation = robberies.observation;
  }
}

