import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'ola',
    loadChildren: () => import('ola/Routes').then(m => m.remoteRoutes),
  },
];
