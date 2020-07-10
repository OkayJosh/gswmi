import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
// import { Article } from '../app/models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url: any;
  constructor(private http: HttpClient) { }

  addUpdateArticle(pagecontent) {  
        debugger  
        this.url = 'http://theblogapi.herokuapp.com/posts/';  
        return this.http.post(this.url, pagecontent);  
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
