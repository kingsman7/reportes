import { Component } from '@angular/core';
import { ChartHomicidesComponent } from "./components/homicides/components/chart-homicides/chart-homicides.component";


@Component({
  selector: 'app-root',
  imports: [ChartHomicidesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reportes';
}
