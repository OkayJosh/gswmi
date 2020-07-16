import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service'
import { Article } from '../models/article' 
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ContentChild } from '@angular/core';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap'
import { error } from 'protractor';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit{
  @ContentChild(NgbPagination) pagination: NgbPagination;
  collectionSize = '';
  public article: Observable<Article[]>;
  prevoiusUrl: any;
  nextUrl: any;
  constructor(private articleService: ArticleService, private router: Router){

  }

  ngOnInit(){
    this.articleService.getArticles().subscribe(
      data =>{
        this.article = data['results'];
        this.collectionSize = data['count'];
        this.nextUrl = data['next'];
        this.prevoiusUrl = data['previous'];
        console.log(data);
      },
      error =>{
        console.log(error.error);
      }
    );
  }

  getContentById(id:number){
    this.router.navigate(['blog-details'], {queryParams: {id: id}});
  }
  getNext(){
    this.articleService.getNextArticle(this.nextUrl).subscribe(
      data =>{
        this.article = data['results'];
        this.collectionSize = data['count'];
        this.nextUrl = data['next'];
        this.prevoiusUrl = data['previous'];
        console.log(data);
      },
      error =>{
        console.log(error.error);
      }
    )
  }
}
