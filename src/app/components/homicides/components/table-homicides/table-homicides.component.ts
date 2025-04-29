import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HomicidesModel } from '../../../../models/homicides.models';

const ELEMENT_DATA: HomicidesModel[] = [
  { entity: 'Zulia', case_file: 'File1', movil: 'Movil1', location: 'Location1', observation: 'Observation1' },
  { entity: 'Barinas', case_file: 'File2', movil: 'Movil2', location: 'Location2', observation: 'Observation2' },
  { entity: 'Anzoategui', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' }
];

@Component({
  selector: 'app-table-homicides',
  imports: [MatTableModule],
  templateUrl: './table-homicides.component.html',
  styleUrl: './table-homicides.component.scss'
})
export class TableHomicidesComponent {
  displayedColumns: string[] = ['entity', 'file', 'movil', 'location', 'observation'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

}
