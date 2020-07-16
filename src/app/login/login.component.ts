import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: any;

  constructor ( public _userService: UserService ){}

  ngOnInit(){
    this.user = {
      username: '',
      password: '',
    }
  }

  login(){
    this._userService.login({'username': this.user.username, 'password': this.user.password})
  }

  refreshToken(){
    this._userService.refreshToken();
  }

  logout(){
    this._userService.logout();
  }
}
