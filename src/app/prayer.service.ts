import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prayerclass } from './classes/prayerclass';
import { Prayer } from "./models/prayers"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrayerService {

  url = 'https://theblogapi.herokuapp.com/prayer_request/';

  constructor(private http: HttpClient) { }

  allpost(): Observable<Prayer[]> {
    // const key = localStorage.getItem('apikey');
        return this.http.get<Prayer[]>(this.url);
    }
  getpost(id): Observable<Prayer[]>{
    // const key = localStorage.getItem('apikey');
        return this.http.get<Prayer[]>(this.url + id + '/' );
  }
  postPrayer(content): Observable<any>{
    return this.http.post<any>(this.url, content);
  }
  getNextPrayer(urlnext): Observable<Prayer[]>{
    return this.http.get<Prayer[]>(urlnext)
  }
}
