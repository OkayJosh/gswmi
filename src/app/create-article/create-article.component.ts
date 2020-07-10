import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ArticleService } from '../article.service'
import { Article } from '../models/article';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AsyncSubject, Subject } from 'rxjs';
import { maxLength } from './maxlength.validator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent { 

  private editorSubject: Subject<any> = new AsyncSubject();
  public postForm = new FormGroup({
    title: new FormControl("", Validators.required),
    body: new FormControl("", Validators.required, maxLength(this.editorSubject, 10))
  });

  @ViewChild('Article') Article: any;    
  res: any;

  constructor(private articleservice:ArticleService, private router: Router) { }
  articledata=new Article();


  handleEditorInit(e) {
    this.editorSubject.next(e.editor);
    this.editorSubject.complete();
  }

  onSubmit(){    
    debugger;    
    debugger;    
    this.articleservice.addUpdateArticle(this.articledata).subscribe((data : any) => {    
      debugger;    
      alert("Data saved Successfully");    
      this.router.navigate(['dashboard/create']);    
    })    
  } 

}
