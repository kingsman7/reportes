import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'homicidios',
        loadComponent: () => import('./components/homicides/homicides.component').then(m => m.HomicidesComponent),
      },
      {
        path: 'intervencion-legal',
        loadComponent: () => import('./components/legal-intervention/legal-intervention.component').then(m => m.LegalInterventionComponent),
      },
      {
        path: 'secuestros',
        loadComponent: () => import('./components/kidnappings/kidnappings.component').then(m => m.KidnappingsComponent),
      },
      {
        path: 'robos',
        loadComponent: () => import('./components/robberies/robberies.component').then(m => m.RobberiesComponent),
      },
      {
        path: '**',
        redirectTo: 'homicidios',
      }
    ]
  },
];
