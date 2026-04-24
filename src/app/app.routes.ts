import { Routes } from '@angular/router';

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
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'predictions',
        redirectTo: '',
        pathMatch: 'full',
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
      },
      {
        path: 'grupos/:groupCode',
        loadComponent: () => import('./layout/group-shell/group-shell').then((m) => m.GroupShell),
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'ranking',
          },
          {
            path: 'inicio',
            redirectTo: '/',
            pathMatch: 'full',
          },
          {
            path: 'ranking',
            loadComponent: () => import('./pages/rankings/rankings').then((m) => m.Rankings),
            data: { title: 'Ranking' },
          },
          {
            path: 'prediccion',
            loadComponent: () => import('./pages/predictions/predictions').then((m) => m.Predictions),
            data: { title: 'Predicción' },
          },
          {
            path: 'ajustes',
            loadComponent: () => import('./pages/group-settings/group-settings').then((m) => m.GroupSettings),
            data: { title: 'Ajustes del grupo' },
          },
        ],
      },
    ],
  },
];
