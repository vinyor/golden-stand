import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/page-shell/page-shell').then((m) => m.PageShell),
    data: { title: 'Home' },
  },
  {
    path: 'rankings',
    loadComponent: () => import('./pages/page-shell/page-shell').then((m) => m.PageShell),
    data: { title: 'Rankings' },
  },
  {
    path: 'predictions',
    loadComponent: () => import('./pages/page-shell/page-shell').then((m) => m.PageShell),
    data: { title: 'Predictions' },
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/page-shell/page-shell').then((m) => m.PageShell),
    data: { title: 'Profile' },
  },
];
