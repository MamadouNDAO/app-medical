import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
  
  token: any
  constructor(
    public jwtHelper: JwtHelperService,
    public router: Router
  ) { }
  isAuthenticated(): boolean {
    this.token = localStorage.getItem('auth-token')
    return !this.jwtHelper.isTokenExpired(this.token);
  }
  canActivate(route: ActivatedRouteSnapshot): boolean{
    if(!this.isAuthenticated() || this.token == ''){
      this.router.navigate(['/login'])
      return false
    }
    return true
  }

}
