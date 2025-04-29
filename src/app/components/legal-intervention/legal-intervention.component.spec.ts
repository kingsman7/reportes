import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalInterventionComponent } from './legal-intervention.component';

describe('LegalInterventionComponent', () => {
  let component: LegalInterventionComponent;
  let fixture: ComponentFixture<LegalInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalInterventionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
