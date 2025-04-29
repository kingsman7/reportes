import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRobberiesComponent } from './table-robberies.component';

describe('TableRobberiesComponent', () => {
  let component: TableRobberiesComponent;
  let fixture: ComponentFixture<TableRobberiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRobberiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRobberiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
