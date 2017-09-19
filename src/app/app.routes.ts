
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { RecetasComponent } from './components/recetas/recetas.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'main', component: MainComponent },
  { path: 'recetas', component: RecetasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
