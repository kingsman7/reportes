import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLegalInterventionComponent } from './chart-legal-intervention.component';

describe('ChartLegalInterventionComponent', () => {
  let component: ChartLegalInterventionComponent;
  let fixture: ComponentFixture<ChartLegalInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartLegalInterventionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartLegalInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
