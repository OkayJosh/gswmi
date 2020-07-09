import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class PodcastService {

  // http options used for making API calls
  private httpOptions: any;
 
  // the actual JWT token
  public token = 'aa64a122d925805c152a2a782800fb6b5a880e8b'


  getpodcasturl = 'https://api.spreaker.com/v2/users/11845707/episodes'
  constructor(private http: HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      })
      
    };
  }
  allpodcastcast() {
    // const key = localStorage.getItem('apikey');
       return this.http.get<any>(this.getpodcasturl, this.httpOptions );
  }
  getPodcasts(){
      return this.http.get<any>(this.getpodcasturl, this.httpOptions );
  }
  getNextPodcast(url){
      return this.http.get<any>(url, this.httpOptions);
  }
}
