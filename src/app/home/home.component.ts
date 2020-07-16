import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
  }

  onwhatsappclick(){
    alert("join our whatsapp group");
    window.location.href="https://chat.whatsapp.com/BHMRZCAoI6NFlbWuFpdJAy"
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
  }

}
