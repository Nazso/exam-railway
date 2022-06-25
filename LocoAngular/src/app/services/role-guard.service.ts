import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      
      const admin = this.authService.userObjectValue && this.authService.userObjectValue.role === 'admin'
      if(!admin) {
        this.router.navigate(['**']);
        return false;
      } else {
        return true;
      }

    }


}
