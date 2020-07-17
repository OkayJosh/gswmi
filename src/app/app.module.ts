import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {  JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt'

import { AppRoutingModule } from './app-routing.module';
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

import { EditorModule } from "@tinymce/tinymce-angular";
 
import { ArticleComponent } from './article/article.component';
import { DashboardInfoComponent } from './dashboard-info/dashboard-info.component';
import { UserService } from './user.service';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { PrayerdetailsComponent } from './prayerdetails/prayerdetails.component';
import { PrayerlistComponent } from './prayerlist/prayerlist.component';
import { PodcastlistComponent } from './podcastlist/podcastlist.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { Min1Component } from './min1/min1.component';
import { Min2Component } from './min2/min2.component';
import { Min3Component } from './min3/min3.component';
import { Min4Component } from './min4/min4.component';


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
    DashboardNavComponent, 
    RequestModalComponent, 
    ContactUsComponent, 
    ArticleComponent, 
    DashboardInfoComponent, 
    PrayerdetailsComponent, 
    PrayerlistComponent, 
    PodcastlistComponent, 
    CreateArticleComponent, 
    Min1Component, 
    Min2Component, 
    Min3Component, 
    Min4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    // // add social buttons module to NgModule imports
    // JwSocialButtonsModule,
    EditorModule,
    NgxUiLoaderModule, // import NgxUiLoaderModule
    NgxUiLoaderRouterModule, // import NgxUiLoaderRouterModule. By default, it will show foreground loader.
    NgxUiLoaderHttpModule, // import NgxUiLoaderHttpModule. By default, it will show background loader.
    // NgxUiLoaderRouterModule.forRoot({ showForeground: true }),
    JwtModule.forRoot({ 
      config: {
        tokenGetter: () =>{
          return localStorage.getItem("apikey");
        },
        allowedDomains: ["http://localhost:4200","https://gswmi.org", "http://gswmi.org"  ],
        disallowedRoutes: [],
      }
    }),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
