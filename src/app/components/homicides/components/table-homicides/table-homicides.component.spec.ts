import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHomicidesComponent } from './table-homicides.component';

describe('TableHomicidesComponent', () => {
  let component: TableHomicidesComponent;
  let fixture: ComponentFixture<TableHomicidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableHomicidesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHomicidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
