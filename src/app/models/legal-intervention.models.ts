export class LegalInterventionModel {
  entity: string;
  case_file: string;
  current_organization: string;
  location: string;
  result: string;

  constructor(legalIntervention?: any) {
    this.entity = legalIntervention.entity;
    this.case_file = legalIntervention.case_file;
    this.current_organization = legalIntervention.current_organization;
    this.location = legalIntervention.location;
    this.result = legalIntervention.result;
  }
}
