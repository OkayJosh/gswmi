import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Publications } from './models/publications'
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  url = 'https://theblogapi.herokuapp.com/publication/'
  private httpOptions: any;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      })
      
    };
  }
addPublication(pagecontent): Observable<any> {    
    return this.http.post(this.url, pagecontent, this.httpOptions);  
  } 
getPublication(id): Observable<Publications[]>{
return this.http.get<Publications[]>(this.url + id + '/');
  }
getAllPublication(): Observable<Publications[]>{
return this.http.get<Publications[]>(this.url);
  }
getNextPublication(url){
return this.http.get<Publications[]>(url);
  }  
}
