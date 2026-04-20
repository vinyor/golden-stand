import { Routes } from '@angular/router';

// Add a child route only after its page component exists (no shared placeholder route).
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/page-shell/page-shell').then((m) => m.PageShell),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
        data: { title: 'Home' },
      },
      {
        path: 'rankings',
        loadComponent: () => import('./pages/rankings/rankings').then((m) => m.Rankings),
        data: { title: 'Rankings' },
      },
      {
        path: 'predictions',
        loadComponent: () => import('./pages/predictions/predictions').then((m) => m.Predictions),
        data: { title: 'Predictions' },
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile').then((m) => m.Profile),
        data: { title: 'Profile' },
      },
    ],
  },
];
