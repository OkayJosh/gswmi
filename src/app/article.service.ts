import { Injectable } from '@angular/core';
import { Article } from './models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Article[] {
    return Article;
  }
}
