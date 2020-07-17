import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/user';
import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy  {
  currentUser: any;
  constructor( private auth: AuthenticationService) {
    this.currentUser = auth.currentUserValue();
    console.log(this.currentUser);
   }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
  }
}
