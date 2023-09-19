import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AppService } from '@services/app.service';
import { Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyAuthGuard {
  isLoggedIn$ = new Subject<boolean>();

  constructor(private router: Router, private appService: AppService) { }


  // canActivate(next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): | Observable<boolean | UrlTree>
  //   | Promise<boolean | UrlTree>
  //   | boolean
  //   | UrlTree {
  //   return this.checkToken();
  // }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.appService.isLoggedIn()) {
      // If the user is authenticated, allow access
      return true;
    } else {
      // If the user is not authenticated, redirect to the login page
      return this.router.createUrlTree(['/login']);
    }
  }

  canActivateChild(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.canActivate(next, state);
  }

  async checkToken() {
    if (this.appService.user) {
      return true;
    }
    try {
      await this.appService.isLoggedIn();
      return true;
    } catch (error) {
      return false;
    }
  }

}
