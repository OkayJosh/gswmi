import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event'
import { Observable } from 'rxjs/Observable';
import { EventService } from '../event.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  closeResult = '';
  modalcontent: any;
  public event: Observable<Event[]>;
  prevoiusUrl: any;
  nextUrl: any;
  collectionSize: any;
  constructor( private eventService: EventService) { }

  ngOnInit(){
    this.eventService.getEvents().subscribe(
      data =>{
        this.event = data['results'];
        this.collectionSize = data['count'];
        this.nextUrl = data['next'];
        this.prevoiusUrl = data['previous'];
        console.log(data);
      },
      error =>{
        console.log(error.error);
      }
    );
  }
  getNext(){
    this.eventService.getNextEvent(this.nextUrl).subscribe(
      data =>{
        this.event = data['results'];
        this.collectionSize = data['count'];
        this.nextUrl = data['next'];
        this.prevoiusUrl = data['previous'];
        console.log(data);
      },
      error =>{
        console.log(error.error);
      }
    );    
  }
  getPrevious(){
    this.eventService.getNextEvent(this.prevoiusUrl).subscribe(
      data =>{
        this.event = data['results'];
        this.collectionSize = data['count'];
        this.nextUrl = data['next'];
        this.prevoiusUrl = data['previous'];
        console.log(data);
      },
      error =>{
        console.log(error.error);
      }
    );    
  }
}
