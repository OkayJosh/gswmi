import { Component, OnInit } from '@angular/core';
import { PrayerService } from '../prayer.service';

@Component({
  selector: 'app-request-modal',
  templateUrl: './request-modal.component.html',
  styleUrls: ['./request-modal.component.scss']
})
export class RequestModalComponent implements OnInit {
  prayerlist = [];
  constructor(private api:PrayerService) { }

  ngOnInit(): void {
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

}
