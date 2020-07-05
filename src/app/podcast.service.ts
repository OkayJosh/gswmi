import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  getpodcasturl = 'https://theblogapi.herokuapp.com/users/'
  constructor(private http: HttpClient) { }
  allpost() {
    // const key = localStorage.getItem('apikey');
       return this.http.get<any>(this.getpodcasturl );
 }
}
