import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Subject, AsyncSubject } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { MinistryService } from '../ministry.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-create-min',
  templateUrl: './create-min.component.html',
  styleUrls: ['./create-min.component.scss']
})
export class CreateMinComponent implements OnInit {

  selectedFile: ImageSnippet;

  private editorSubject: Subject<any> = new AsyncSubject();
  public minForm = new FormGroup({
    name: new FormControl("", Validators.required),
    link: new FormControl("", Validators.required),
    vlink: new FormControl("", Validators.required),
    image: new FormControl(null),
    info: new FormControl("", Validators.required)
  }); 
  res: any;
  error: any;
  currentUser: any;
  file: Blob
  constructor(private minService: MinistryService, private auth: AuthenticationService, private router: Router) { 
    this.currentUser = auth.currentUserValue();
    }

  handleEditorInit(e) {
    this.editorSubject.next(e.editor);
    this.editorSubject.complete();
  }

  ngOnInit(): void {
  }
  processFile(event) {
    this.file = event.target.files[0];
    this.minForm.setValue({image: this.file});
  }
  onSubmit(){    
    this.minService.addUpdateMinistry(JSON.stringify(this.minForm.value)).subscribe(
      data =>{

      },
      error => {
        this.error = JSON.stringify(error.error)
        console.log(error.eror)
      }
    )
    this.minForm.reset();  
  } 
}
