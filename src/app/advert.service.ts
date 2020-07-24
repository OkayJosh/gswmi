import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Advert } from './models/advert'
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  url = 'https://theblogapi.herokuapp.com/advert/'
  private httpOptions: any;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      })
      
    };
  }
addAdvert(pagecontent): Observable<any> {    
    return this.http.post(this.url, pagecontent, this.httpOptions);  
  } 
getAdvert(id): Observable<Advert[]>{
return this.http.get<Advert[]>(this.url + id + '/');
  }
getAllAdvert(): Observable<Advert[]>{
return this.http.get<Advert[]>(this.url);
  }
getNextAdvert(url){
return this.http.get<Advert[]>(url);
  }  
}
