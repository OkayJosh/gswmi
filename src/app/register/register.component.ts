import { Component, OnInit } from '@angular/core';
import { Signupclass } from '../signupclass';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isCollapsed = true;
  signupModel = new Signupclass('', '', '');
  errormessage = [];
  error = false;
  test = 'yeahhh';
  constructor(private api:UserService, private router: Router) { }
  SignUp() {
    this.errormessage = [];
    this.error = false;
    this.api.signUpApi(this.signupModel).subscribe(
      data => {
        console.log(data, 'enterred');
        this.router.navigate(['/login']);
 
      },
      error => {
        // this.errormessage = error.error;
        console.log(error.error, 'error');
        if (error.error['email']) {
          this.error = true;
          this.errormessage.push(error.error['email'][0]);
        } if (error.error['username']) {
          this.error = true;
          this.errormessage.push(error.error.username[0]);
         }
         if (error.error['password']) {
          this.error = true;
          this.errormessage.push(error.error.password[0]);         
        }
        console.log(this.errormessage, 'error message');
        // if (error.error['email'][0]){
        //   this.errormessage.push(error.error['email'];
        // } else if (error.error['username'][0] ) {
        //   this.errormessage.push(error.error['username']);
        // } else if (error.error['password'][0]) {
        //     this.errormessage.push(error.error['password']);
        // }
        // console.log(this.errormessage);
      }
    );
    // console.log(this.signupModel);
  }
  ngOnInit(): void {
  }

}
