import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  ngOnInit() {}
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');

  }
  onwhatsappclick(){
    window.location.href="https://chat.whatsapp.com/BHMRZCAoI6NFlbWuFpdJAy"
  }
  ontelegramclick(){
    window.location.href="https://t.me/joinchat/J3JIQlQYQY39RNeFkXNv1A"
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
  }
}
