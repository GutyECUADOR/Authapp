import { AuthService } from './services/auth.service';
import { appRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PreciosPageComponent } from './components/precios-page/precios-page.component';
import { ProtegidaPageComponent } from './components/protegida-page/protegida-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    PreciosPageComponent,
    ProtegidaPageComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
