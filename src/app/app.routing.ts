import { AuthGuardService } from './services/auth-guard.service';
import { ProtegidaPageComponent } from './components/protegida-page/protegida-page.component';
import { PreciosPageComponent } from './components/precios-page/precios-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: 'inicio', component: HomePageComponent },
    { path: 'precios', component: PreciosPageComponent },
    { path: 'protegida', component: ProtegidaPageComponent, canActivate: [AuthGuardService] },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const appRouting = RouterModule.forRoot(routes);
