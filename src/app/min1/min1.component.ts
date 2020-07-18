import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../publication.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-min1',
  templateUrl: './min1.component.html',
  styleUrls: ['./min1.component.scss']
})
export class Min1Component implements OnInit {

  public pubForm = new FormGroup({
    name: new FormControl("", Validators.required),
    photo: new FormControl("", Validators.required),
    price: new FormControl(null, Validators.required),
    active: new FormControl(false, Validators.required),
    
  });

  error: any;
  constructor( private pubservice: PublicationService) { 

  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.pubForm.value.photo = new ImageSnippet(event.target.result, file);
    });

    reader.readAsDataURL(file);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.pubservice.addPublication(JSON.stringify(this.pubForm.value)).subscribe(
      data => {
        data;
        alert("Data save Correctly")
      },
      error => {
        this.error = JSON.stringify(error.error)
      }
    );
    this.pubForm.reset()
  }

}
