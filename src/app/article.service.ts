import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
// import { Article } from '../app/models/article';
import { Observable } from 'rxjs/Observable';
import { _throw  as ObservableThrow } from 'rxjs/observable/throw';
import { of as ObservableOf } from 'rxjs/observable/of';
import { Article } from '../app/models/article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url = 'http://theblogapi.herokuapp.com/posts/';
  private httpOptions: any;
  
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      })
      
    };
  }

  addUpdateArticle(pagecontent): Observable<any> {    
        return this.http.post(this.url, pagecontent, this.httpOptions);  
    } 
  getArticle(id): Observable<Article[]>{
    return this.http.get<Article[]>(this.url + id + '/');
  }
  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(this.url);
  }
}
