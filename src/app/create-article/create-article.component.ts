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
    text: new FormControl("", Validators.required, maxLength(this.editorSubject, 100000))
  });

  @ViewChild('Article') Article: any;    
  res: any;
  error: any;

  constructor(private articleservice:ArticleService, private router: Router) { }

  handleEditorInit(e) {
    this.editorSubject.next(e.editor);
    this.editorSubject.complete();
  }

  onSubmit(){    
    this.articleservice.addUpdateArticle(JSON.stringify(this.postForm.value)).subscribe((data : any) => {       
      error => {
        this.error = error;
      }
      alert("Data saved Successfully"); 
    })
    this.postForm = new FormGroup({
      title: new FormControl("", Validators.required),
      text: new FormControl("", Validators.required, maxLength(this.editorSubject, 100000))
    });  
  } 

}
