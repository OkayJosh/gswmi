import { Component, OnInit } from '@angular/core';
import { PrayerService } from '../prayer.service';

@Component({
  selector: 'app-prayerlist',
  templateUrl: './prayerlist.component.html',
  styleUrls: ['./prayerlist.component.scss']
})
export class PrayerlistComponent implements OnInit {
  prayerlist = [];
  constructor(private api:PrayerService) { }
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
    this.getPrayer();
  }

}
