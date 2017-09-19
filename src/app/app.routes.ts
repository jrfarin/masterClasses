
import { RouterModule, Routes } from '@angular/router';

import {
    HomeComponent,
    MainComponent
}
from './components/index.paginas';

const APP_ROUTES: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true});
