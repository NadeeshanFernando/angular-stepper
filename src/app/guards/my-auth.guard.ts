import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyAuthGuard implements CanActivate, CanActivateChild {

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  // canActivateChild(
  //   childRoute: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if a token exists in local storage
    const token = localStorage.getItem('token');
    const token2 = localStorage.getItem('gatekeeper_token');

    if (token || token2) {
      // Token exists, allow access to the route
      return true;
    } else {
      // No token, redirect to the login page and deny access
      this.router.navigate(['/login']);
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Apply the same logic as canActivate for child routes
    const token = localStorage.getItem('token');
    const token2 = localStorage.getItem('gatekeeper_token');

    if (token || token2) {
      // Token exists, allow access to the route
      return this.canActivate(childRoute, state);
    } else {
      // No token, redirect to the login page and deny access
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
