import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../article.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  res: any;
  title: any;
  content: any;
  featured_image: any;
  constructor(private articleService:ArticleService, private route: ActivatedRoute) { }

  ngOnInit(){
    let id= this.route.snapshot.queryParams["id"];
    this.getContentById(id);
  }

  getContentById(id:number){
    this.articleService.getArticle(id).subscribe((data:any)=>{
      this.res=data;
      this.title=this.res['title'];
      this.content=this.res['text'];
      this.featured_image = this.res['featured_image'];
      console.log(this.res);
    });
  }
}
