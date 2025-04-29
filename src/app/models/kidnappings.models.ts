export class KidnappingsModel {
  entity: string;
  case_file: string;
  status: string;
  location: string;
  observation: string;

  constructor(kidnappings?: any) {
    this.entity = kidnappings.entity;
    this.case_file = kidnappings.case_file;
    this.status = kidnappings.status;
    this.location = kidnappings.location;
    this.observation = kidnappings.observation;
  }
}
