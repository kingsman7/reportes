import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLegalInterventionComponent } from './table-legal-intervention.component';

describe('TableLegalInterventionComponent', () => {
  let component: TableLegalInterventionComponent;
  let fixture: ComponentFixture<TableLegalInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableLegalInterventionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableLegalInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
