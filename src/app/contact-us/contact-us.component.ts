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
    this.contactservice.addContact(JSON.stringify(this.contactForm.value)).subscribe(
      data => {
        data;
        alert("Data save Correctly")

      },
      error =>{
        this.error = JSON.stringify(error.eror) 
      });

    this.contactForm.reset()
    
  }

  onwhatsappclick(){
    alert("Connect with us on whatsapp");
    window.location.href="https://chat.whatsapp.com/BHMRZCAoI6NFlbWuFpdJAy"
  }
  ontelegramclick(){
    alert("Connect with us on Telegram");
    window.location.href="https://chat.whatsapp.com/BHMRZCAoI6NFlbWuFpdJAy"
  }
}
