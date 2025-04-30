import { Component } from '@angular/core';
import { ChartHomicidesComponent } from "./components/homicides/components/chart-homicides/chart-homicides.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [
    DashboardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reportes';
}
