import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prayerclass } from './classes/prayerclass';


@Injectable({
  providedIn: 'root'
})
export class PrayerService {

  prayerurl = 'http://theblogapi.herokuapp.com/prayer_request/';
  prayerModel = new Prayerclass('', '', '');
  constructor(private http: HttpClient) { }
  allpost() {
    // const key = localStorage.getItem('apikey');
       return this.http.get<any>(this.prayerurl );
 }
  getpost(id) {
    // const key = localStorage.getItem('apikey');
       return this.http.get<any>(this.prayerurl + id + '/' );
 }
postPrayer(post:Prayerclass){
  return this.http.post<any>(this.prayerurl, post);
}
}
