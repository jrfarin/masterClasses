
import { RouterModule, Routes } from '@angular/router';

import {
    HomeComponent,
    MainComponent
}
from './components/index.paginas';

const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'main', component: MainComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true});
