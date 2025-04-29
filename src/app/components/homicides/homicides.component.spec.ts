import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomicidesComponent } from './homicides.component';

describe('HomicidesComponent', () => {
  let component: HomicidesComponent;
  let fixture: ComponentFixture<HomicidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomicidesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomicidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
