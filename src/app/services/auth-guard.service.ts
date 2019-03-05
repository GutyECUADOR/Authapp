import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    console.log(next);
    console.log(state);

    if (this.authService.isAuthenticated()) {
      console.log('Acceso Correcto');
      return true;
    } else {
      console.warn('Acceso denegado');
      return false;
    }
  }
}
