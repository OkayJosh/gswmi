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

  private editorSubject: Subject<any> = new AsyncSubject();
  public postForm = new FormGroup({
    title: new FormControl("", Validators.required),
    featured_image: new FormControl("", Validators.required),
    text: new FormControl("", Validators.required, maxLength(this.editorSubject, 100000))
  });

  @ViewChild('Article') Article: any;    
  res: any;
  error: any;
  currentUser: any;

  constructor(private articleservice:ArticleService, private auth: AuthenticationService, private router: Router) {
    this.currentUser = auth.currentUserValue();
   }

  handleEditorInit(e) {
    this.editorSubject.next(e.editor);
    this.editorSubject.complete();
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.postForm.value.featured_image = new ImageSnippet(event.target.result, file);
    });

    reader.readAsDataURL(file);
  }

  onSubmit(){    
    this.articleservice.addUpdateArticle(JSON.stringify(this.postForm.value)).subscribe((data : any) => {       
      error => {
        this.error = error;
      }
      alert("Data saved Successfully"); 
    })
    this.postForm.reset();  
  } 

}
