import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
// import { Article } from '../app/models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url: any;
  private httpOptions: any;
  
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      })
      
    };
  }

  addUpdateArticle(pagecontent) {  
        debugger  
        this.url = 'http://theblogapi.herokuapp.com/posts/';  
        return this.http.post(this.url, pagecontent, this.httpOptions);  
    } 
  getArticle(id){
    debugger
    this.url = 'http://theblogapi.herokuapp.com/posts/' + id + '/';
    return this.http.get(this.url);
  }
  getArticles(){
    debugger
    this.url = 'http://theblogapi.herokuapp.com/posts/';
    return this.http.get(this.url);
  }
}
