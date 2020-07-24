import { Component, OnInit } from '@angular/core';
import { Subject, AsyncSubject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from '../event.service';
import { AuthenticationService } from '../authentication.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  private editorSubject: Subject<any> = new AsyncSubject();
  public eventForm = new FormGroup({
    name: new FormControl("", Validators.required),
    link: new FormControl("", Validators.required),
    image: new FormControl(null),
    info: new FormControl("", Validators.required)
  }); 
  res: any;
  error: any;
  currentUser: any;
  file: Blob
  constructor( private eventService: EventService, private auth: AuthenticationService) {
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
    this.eventForm.setValue({image: this.file});
  }

  ngOnInit(): void {
  }

  onSubmit(){    
    this.eventService.addUpdateEvent(JSON.stringify(this.eventForm.value)).subscribe(
      data =>{

      },
      error => {
        this.error = JSON.stringify(error.error)
        console.log(error.eror)
      }
    )
    this.eventForm.reset();  
  }

}
