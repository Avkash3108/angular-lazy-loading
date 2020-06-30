import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService }      from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url: string = state.url;

      return this.checkAdmin(url);
  }

  checkAdmin(url: string): boolean {
    return true;
    const userType = localStorage.getItem('userType');
    const userId = localStorage.getItem('userId');
    if (userId && userType === 'admin') { return true; }
    this.authService.redirectUrl = url;

    this.router.navigate(['/login']);
    return false;
  }
  
}
