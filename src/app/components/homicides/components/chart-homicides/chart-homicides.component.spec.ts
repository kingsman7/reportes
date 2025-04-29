import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartHomicidesComponent } from './chart-homicides.component';

describe('ChartHomicidesComponent', () => {
  let component: ChartHomicidesComponent;
  let fixture: ComponentFixture<ChartHomicidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartHomicidesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartHomicidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
