import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ArticleService } from '../article.service'
import { Article } from '../models/article';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AsyncSubject, Subject } from 'rxjs';
import { maxLength } from './maxlength.validator';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})

export class CreateArticleComponent { 

  selectedFile: ImageSnippet;

  private editorSubject: Subject<any> = new AsyncSubject();
  public postForm = new FormGroup({
    title: new FormControl("", Validators.required),
    featured_image: new FormControl(null),
    text: new FormControl("", Validators.required)
  });

  @ViewChild('Article') Article: any;    
  res: any;
  error: any;
  currentUser: any;
  file: File
  constructor(private articleservice:ArticleService, private auth: AuthenticationService, private router: Router) {
    this.currentUser = auth.currentUserValue();
   }

  handleEditorInit(e) {
    this.editorSubject.next(e.editor);
    this.editorSubject.complete();
  }
  processFile(event) {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    this.postForm.setValue({featured_image: this.file});
  }

  onSubmit(){    
    this.articleservice.addUpdateArticle(JSON.stringify(this.postForm.value)).subscribe(
      data =>{

      },
      error => {
        this.error = JSON.stringify(error.error)
        console.log(error.eror)
      }
    )
    this.postForm.reset();  
  } 

}
