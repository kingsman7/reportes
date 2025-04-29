import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { TableHomicidesComponent } from './components/table-homicides/table-homicides.component';
import { ChartHomicidesComponent, } from './components/chart-homicides/chart-homicides.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-homicides',
  imports: [
    MatGridListModule,
    MatButtonModule,
    TableHomicidesComponent,
    ChartHomicidesComponent,
    MatIconModule,
  ],
  standalone: true,
  templateUrl: './homicides.component.html',
  styleUrl: './homicides.component.scss'
})
export class HomicidesComponent {

}
