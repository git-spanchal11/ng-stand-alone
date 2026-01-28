import { Routes } from '@angular/router';

export const FEATURE_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'app-landing',
    pathMatch: 'full',
  },
  {
    path: 'app-landing',
    loadComponent: () =>
      import('./pages/app-landing-page/app-landing-page').then(
        m => m.AppLandingPage
      ),
  },
  {
    path: 'HomePage',
    loadComponent: () =>
      import('./pages/home-page/home-page').then(
        m => m.HomePage
      ),
  }
];