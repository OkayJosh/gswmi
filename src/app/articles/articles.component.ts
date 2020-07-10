import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service' 
import { Router } from '@angular/router';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit{
  res: any;
  term: any;
  const: any;

  constructor(private articleService: ArticleService, private router: Router){

  }

  ngOnInit(){
    this.getContent();
  }

  getContent(){
    this.articleService.getArticles().subscribe((data:any)=>{
      this.res=data;
      this.term = this.res[1].pageContentTitle;
      this.const = this.res[1].Content;
      console.log(this.res);
    })
  }
  getContentById(id:number){
    this.router.navigate(['blog-details'], {queryParams: {id: id}});
  }
}
