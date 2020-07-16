import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service'
import { Article } from '../models/article' 
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit{

  public article: Observable<Article[]>;
  constructor(private articleService: ArticleService, private router: Router){

  }

  ngOnInit(){
    this.article = this.articleService.getArticles();
  }

  getContentById(id:number){
    this.router.navigate(['blog-details'], {queryParams: {id: id}});
  }
}
