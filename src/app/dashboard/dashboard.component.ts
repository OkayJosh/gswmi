import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
import { PrayerService } from '../prayer.service';
import { User } from '../models/user';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy  {
  home = true; // this is to show the dashboard div in the dashboard page
  prayer = false; // default is false this is to show the prayer div in the dashboard page if true
  prayerlist = [];
  currentUser: User;
  constructor(
    private api:PrayerService) { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');


  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
  }
}
