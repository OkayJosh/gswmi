import { Component, OnInit } from '@angular/core';
import { PrayerService } from '../prayer.service';

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.scss']
})
export class DashboardInfoComponent implements OnInit {
  prayerlist = [];
  constructor(private api: PrayerService) { }
  getPrayer(){
    this.api.allpost().subscribe(
  data => {
    this.prayerlist = data;
    console.log(data);
  },
  error => {
    console.log(error.error);
  }
);
}
  ngOnInit(): void {
  }

}
