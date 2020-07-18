import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../app/models/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  url = 'https://theblogapi.herokuapp.com/contact/';
  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      })
      
    };
  }

  addContact(pagecontent): Observable<any> {    
      return this.http.post(this.url, pagecontent, this.httpOptions);  
    } 
  getContact(id): Observable<Contact[]>{
  return this.http.get<Contact[]>(this.url + id + '/');
    }
  getAllContact(): Observable<Contact[]>{
  return this.http.get<Contact[]>(this.url);
    }
  getNextContact(url){
  return this.http.get<Contact[]>(url);
    }
}
