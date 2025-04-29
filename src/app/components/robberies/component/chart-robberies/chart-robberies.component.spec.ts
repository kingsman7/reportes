import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRobberiesComponent } from './chart-robberies.component';

describe('ChartRobberiesComponent', () => {
  let component: ChartRobberiesComponent;
  let fixture: ComponentFixture<ChartRobberiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartRobberiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartRobberiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
