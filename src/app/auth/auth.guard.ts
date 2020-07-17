import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor (private router: Router,
    private authenticationService: AuthenticationService ) { }

  canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const currentUser = this.authenticationService.currentUserValue();
      if(currentUser){
        console.log(currentUser);
        return true;
      }else{
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
      }

  }

  canActivateChild (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if(currentUser){
      console.log(currentUser);
      return true;
    } else{
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }

  }
  
}
