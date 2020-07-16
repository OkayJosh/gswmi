import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from './models/user';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // http options used for making API calls
  private httpOptions: any;
 
  // the actual url for token
  urlToken = 'https://theblogapi.herokuapp.com/api-token-auth/';
 
  // the token expiration date
  public token: any;

  //url for signup
  userUrl = 'https://theblogapi.herokuapp.com/users/';
 
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      })
      
    };
  }

  // contains api to signup
  public signUpApi(user): Observable<any> {
    return this.http.post(this.userUrl, user, this.httpOptions);
  }
  // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
  public login(user): Observable<any> {
    return this.http.post(this.urlToken, user);
  }
 
  // Refreshes the JWT token, to extend the time the user is logged in
  public refreshToken(token): Observable<any> {
    return this.http.post(this.urlToken, JSON.stringify({token}), this.httpOptions);
  }
 
  public logout() {
    // this.token = null;
    // this.token_expires = null;
    // this.username = null;
    localStorage.setItem('token', null);
  }
 
  // private updateData(token) {
  //   this.token = token;
  //   this.errors = [];
 
  //   // decode the token to read the username and expiration timestamp
  //   const token_parts = this.token.split(/\./);
  //   const token_decoded = JSON.parse(window.atob(token_parts[1]));
  //   this.token_expires = new Date(token_decoded.exp * 1000);
  //   this.username = token_decoded.username;
  // }
 
}
