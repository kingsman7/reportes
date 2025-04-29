import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableKidnappingsComponent } from './table-kidnappings.component';

describe('TableKidnappingsComponent', () => {
  let component: TableKidnappingsComponent;
  let fixture: ComponentFixture<TableKidnappingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableKidnappingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableKidnappingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
