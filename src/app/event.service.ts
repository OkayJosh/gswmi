import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Event } from '../app/models/event'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  url = 'https://theblogapi.herokuapp.com/Event/';
  private httpOptions: any;
  constructor(private http: HttpClient) { 
    this.httpOptions = {
      headers:  new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }
  addUpdateEvent(pagecontent): Observable<any> {    
    return this.http.post(this.url, pagecontent, this.httpOptions);  
  } 
  getEvent(id): Observable<Event[]>{
    return this.http.get<Event[]>(this.url + id + '/');
  }
  getEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(this.url);
  }
  getNextEvent(url){
    return this.http.get<Event[]>(url);
  }
}
