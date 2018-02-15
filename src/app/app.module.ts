import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { InformacionService } from './services/informacion.service';
import { RecetasService } from './services/recetas.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { RecetasComponent } from './components/recetas/recetas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    RecetasComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    InformacionService,
    RecetasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
