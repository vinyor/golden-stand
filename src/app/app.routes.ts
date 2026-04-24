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
        data: { title: 'Inicio' },
      },
      {
        path: 'rankings',
        loadComponent: () => import('./pages/rankings/rankings').then((m) => m.Rankings),
        data: { title: 'Rankings' },
      },
      {
        path: 'predictions',
        loadComponent: () => import('./pages/predictions/predictions').then((m) => m.Predictions),
        data: { title: 'Predicciones' },
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile').then((m) => m.Profile),
        data: { title: 'Perfil' },
      },
      {
        path: 'create-group',
        loadComponent: () => import('./pages/create-group/create-group').then((m) => m.CreateGroup),
        data: { title: 'Crear Grupo' },
      }
    ],
  },
];
