import { Routes } from '@angular/router';

export const routes: Routes = [

    {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/feature.routes')
            .then(m => m.FEATURE_ROUTES)
      }
    ]
  }
];
