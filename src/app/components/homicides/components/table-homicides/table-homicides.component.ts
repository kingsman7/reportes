import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HomicidesModel } from '../../../../models/homicides.models';

const ELEMENT_DATA: HomicidesModel[] = [
  { entity: 'Amazonas', case_file: 'File1', movil: 'Movil1', location: 'Location1', observation: 'Observation1' },
  { entity: 'Anzoátegui', case_file: 'File2', movil: 'Movil2', location: 'Location2', observation: 'Observation2' },
  { entity: 'Apure', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Aragua', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Barinas', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Bolívar', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Carabobo', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Cojedes', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Delta Amacuro', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Falcón', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Guárico', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Lara', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Mérida', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Miranda', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Monagas', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Nueva Esparta', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Portuguesa', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Sucre', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Táchira', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Trujillo', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Yaracuy', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Zulia', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Distrito Capital', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
  { entity: 'Dependencias Federales', case_file: 'File3', movil: 'Movil3', location: 'Location3', observation: 'Observation3' },
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
