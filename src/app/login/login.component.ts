import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { User, UserResult } from '../models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: Observable<UserResult[]>;
  prevoiusUrl: any;
  nextUrl: any;
  token: any;
  public loginForm: FormGroup = new FormGroup({
    password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    username: new FormControl(null, [Validators.required, Validators.minLength(3)])
  });
  error: any;

  constructor ( public _userService: UserService, private router: Router ){}

  ngOnInit(){

  }

  login(){
    this._userService.login(this.loginForm.value).subscribe(
      data =>{
        this.token = data;
        localStorage.setItem('token', data)
        this.router.navigate(['/dashboard']);
      },
      error =>{
        this.error = error;
        console.log(error);
      }
    )

  }

  refreshToken(){
    this._userService.refreshToken(this.token).subscribe(
      data => {
        this.token = data;
        localStorage.setItem('token', data);
      }
    );
  }

  logout(){
    this._userService.logout();
  }
}
