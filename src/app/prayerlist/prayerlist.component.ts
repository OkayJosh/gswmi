import { Component, OnInit } from '@angular/core';
import { Prayer } from '../models/prayers'
import { PrayerService } from '../prayer.service';
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router';

@Component({
  selector: 'app-prayerlist',
  templateUrl: './prayerlist.component.html',
  styleUrls: ['./prayerlist.component.scss']
})
export class PrayerlistComponent implements OnInit {
  public prayers: Observable<Prayer[]>;
  collectionSize = '';
  previousUrl: any;
  nextUrl: any;
  constructor(private prayerService:PrayerService,
    private router: Router) { 

  }

  ngOnInit (){
    this.prayerService.allpost().subscribe(
      data =>{
        this.prayers = data['results'];
        this.collectionSize = data['count'];
        this.nextUrl = data['next'];
        this.previousUrl = data['previous'];
      }
    )
  }
  getPrayerById(id:number){
    this.router.navigate(['prayer-details'], {queryParams: {id: id}});
  }

  getNext(){
    this.prayerService.getNextPrayer(this.nextUrl).subscribe(
      data =>{
        this.prayers = data['results'];
        this.collectionSize = data['count'];
        this.nextUrl = data['next'];
        this.previousUrl = data['previous'];
      },
      error => {
        console.log(error.error)
      }
    )
  }

}
