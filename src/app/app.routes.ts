import { Routes } from '@angular/router';
import { Layout } from './shared/components/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/landing/landing.routes').then((m) => m.routes),
      },
    ],
  },
  {
    path: 'info',
    component: Layout,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/info/info.routes').then((m) => m.INFO_ROUTES),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
