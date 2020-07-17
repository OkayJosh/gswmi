import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  public contactForm = new FormGroup({
    fullname: new FormControl("", Validators.required),
    phonenumber: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    message: new FormControl("", Validators.required)
  });
   
  res: any;
  error: any;
  currentUser: any;

  constructor(private contactservice:ContactService) {
    
   }

  ngOnInit(): void {
    
  }

  onSubmit(){ 
    console.log(this.contactForm.value);   
    this.contactservice.addContact(JSON.stringify(this.contactForm.value)).subscribe((data : any) => {       
      error => {
        this.error = error;
      }
      alert("Data saved Successfully"); 
    })

    this.contactForm.reset();
    
  }
}
