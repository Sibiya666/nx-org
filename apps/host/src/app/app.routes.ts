import { loadRemoteModule } from '@nx/angular/mf';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@org/auth').then(m => m.AuthComponent),
  },
  {
    path: 'ola',
    loadChildren: () =>  loadRemoteModule('ola', './Routes').then(m => m.remoteRoutes),
  },
];
