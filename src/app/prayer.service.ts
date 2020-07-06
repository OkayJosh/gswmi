import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrayerService {

  getprayerurl = 'http://theblogapi.herokuapp.com/prayer_request/';
  constructor(private http: HttpClient) { }
  allpost() {
    // const key = localStorage.getItem('apikey');
       return this.http.get<any>(this.getprayerurl );
 }
  getpost(id) {
    // const key = localStorage.getItem('apikey');
       return this.http.get<any>(this.getprayerurl + id + '/' );
 }
}
