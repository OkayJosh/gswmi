import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdvertService } from '../advert.service';


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}


@Component({
  selector: 'app-min2',
  templateUrl: './min2.component.html',
  styleUrls: ['./min2.component.scss']
})
export class Min2Component implements OnInit {

  public adForm = new FormGroup({
    advertname: new FormControl("", Validators.required),
    photo: new FormControl("", Validators.required),
    active: new FormControl(false, Validators.required),
    
  });

  error: any;
  constructor( private adservice: AdvertService) { 

  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.adForm.value.photo = new ImageSnippet(event.target.result, file);
    });

    reader.readAsDataURL(file);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.adservice.addAdvert(JSON.stringify(this.adForm.value)).subscribe(
      data => {
        data;
        alert("Data save Correctly")
      },
      error => {
        this.error = JSON.stringify(error.error)
      }
    );
    this.adForm.reset()
  }

}