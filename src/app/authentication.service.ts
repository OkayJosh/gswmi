import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService, JwtConfig } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserToken: any;
  private token: any;
  private isExpired: Boolean;
  private token_expires: Date;

  constructor(private helper: JwtHelperService) {
      this.currentUserToken = localStorage.getItem('apikey');
      this.token = helper.decodeToken(this.currentUserToken);
      this.token_expires = helper.getTokenExpirationDate(this.currentUserToken);
      this.isExpired = helper.isTokenExpired(this.currentUserToken);
  }

  public currentUserValue(){
    return [this.token.username];
  }
      
}
