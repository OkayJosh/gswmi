import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Ministry } from '../app/models/ministry'

@Injectable({
  providedIn: 'root'
})
export class MinistryService {

  url = 'https://theblogapi.herokuapp.com/ministries/'
  private httpOptions: any;

  constructor(private http: HttpClient) { 
    this.httpOptions ={
      header: new HttpHeaders({
        'Content-Type': 'application/json', 
      })
    };
  }
 addUpdateMinistry(pagecontent): Observable<any> {    
        return this.http.post(this.url, pagecontent, this.httpOptions);  
    } 
  getMinistry(id): Observable<Ministry[]>{
    return this.http.get<Ministry[]>(this.url + id + '/');
  }
  getMinistries(): Observable<Ministry[]>{
    return this.http.get<Ministry[]>(this.url);
  }
  getNextMinistry(url){
    return this.http.get<Ministry[]>(url);
  }  
}
