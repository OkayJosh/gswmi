import { Component, OnInit } from '@angular/core';
import { PrayerService } from '../prayer.service';
import { Prayerclass } from '../classes/prayerclass';

@Component({
  selector: 'app-request-modal',
  templateUrl: './request-modal.component.html',
  styleUrls: ['./request-modal.component.scss']
})
export class RequestModalComponent implements OnInit {
  prayerlist = [];
  prayerModel = new Prayerclass('', '', '');
  posted = false;
  constructor(private api:PrayerService) { }
  prayerSubmit(){
    console.log(this.prayerModel);
    this.api.postPrayer(this.prayerModel).subscribe(
      data => {
        this.posted = true;
             },
      error => {
        console.log(error.error);
      }
    );
  }
  ngOnInit(): void {

  }

}
