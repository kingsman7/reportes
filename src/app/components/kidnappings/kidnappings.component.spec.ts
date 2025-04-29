import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidnappingsComponent } from './kidnappings.component';

describe('KidnappingsComponent', () => {
  let component: KidnappingsComponent;
  let fixture: ComponentFixture<KidnappingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidnappingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidnappingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
