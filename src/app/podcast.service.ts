import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  getpodcasturl = 'https://api.spreaker.com/v2/users/11845707/episodes'
  constructor(private http: HttpClient) { }
  allpodcastcast() {
    // const key = localStorage.getItem('apikey');
       return this.http.get<any>(this.getpodcasturl );
 }
 getPodcasts(){
  return this.http.get<any>(this.getpodcasturl );
 }
 getNextPodcast(url){
  return this.http.get<any>(url);
 }
}
