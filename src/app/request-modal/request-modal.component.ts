import { Component, OnInit } from '@angular/core';
import { PrayerService } from '../prayer.service';
import { Prayer } from '../models/prayers';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-request-modal',
  templateUrl: './request-modal.component.html',
  styleUrls: ['./request-modal.component.scss']
})
export class RequestModalComponent implements OnInit {
  public prayerForm = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phonenumber: new FormControl("", Validators.required),
    prayer_point: new FormControl("", Validators.required)

  });
  error: any;
  constructor(private prayerService:PrayerService) { }

  prayerSubmit(){
    
    this.prayerService.postPrayer(this.prayerForm.value).subscribe((data : any) => {       
      error => {
        this.error = error;
        console.log(this.error)
      }
      alert("Data saved Successfully"); 
    })
    this.prayerForm.reset()
  }
  ngOnInit(): void {

  }

}
