import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadComponent: () => import('./features/pages/app-landing-page/app-landing-page').then( m => m.AppLandingPage)
  },
  {
    path: 'HomePage',
    loadComponent: () => import('./features/pages/home-page/home-page').then( m => m.HomePage)
  } 
];
