import { Component, OnInit } from '@angular/core';
import { Advert } from '../models/advert';
import { Observable } from 'rxjs/Observable';
import { AdvertService } from '../advert.service';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.scss']
})
export class AdvertsComponent implements OnInit {
  public adverts: Observable<Advert[]>;

  constructor(private advertService: AdvertService) { }

  ngOnInit(){
    this.advertService.getAllAdvert().subscribe(
      data =>{
        this.adverts = data['results'];
        console.log(data['results']);
      },
      error =>{
        console.log(error.error);
      }
    );
  }


}
