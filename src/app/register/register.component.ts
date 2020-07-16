import { Component, OnInit } from '@angular/core';
import { User, UserResult } from '../models/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    isCollapsed = true;
    public signupForm = new FormGroup({
      username: new FormControl(null,[Validators.required, Validators.minLength(4)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      confirmPass: new FormControl(null, Validators.minLength(4)),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    }, this.passwordMatchValidator);
    error: any;
    constructor(private userService:UserService, private router: Router) { }
    SignUp() {
      this.userService.signUpApi([this.signupForm.get('username'), this.signupForm.get('email'), this.signupForm.get('password')]).subscribe(
        data =>{
          alert("SignUp  Successfully");
          this.router.navigate(['/dashboard']);
        },
          error => {
            this.error = error;
          }

      );

    }
    ngOnInit(): void {
    }
   passwordMatchValidator(g: FormGroup) {
      return g.get('password').value === g.get('confirmPass').value
         ? null : {'mismatch': true};
   }

}
