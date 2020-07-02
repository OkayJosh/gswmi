import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { OurRadioComponent } from './our-radio/our-radio.component';
import { ArticlesComponent } from './articles/articles.component';
import { PodcastComponent } from './podcast/podcast.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { RequestModalComponent } from './request-modal/request-modal.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ArticleComponent } from './article/article.component';
import { DashboardInfoComponent } from './dashboard-info/dashboard-info.component';
import {UserService} from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,    
    HomeComponent, 
    OurRadioComponent, 
    ArticlesComponent, 
    PodcastComponent, 
    FooterComponent, 
    DashboardNavComponent, RequestModalComponent, ContactUsComponent, ArticleComponent, DashboardInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    CKEditorModule,

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
