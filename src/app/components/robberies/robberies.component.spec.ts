import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobberiesComponent } from './robberies.component';

describe('RobberiesComponent', () => {
  let component: RobberiesComponent;
  let fixture: ComponentFixture<RobberiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RobberiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RobberiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
