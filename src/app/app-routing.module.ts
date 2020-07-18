import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestModalComponent } from './request-modal/request-modal.component'
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { RouterModule, Routes } from '@angular/router';
import { PodcastComponent } from './podcast/podcast.component';
import { PrayerdetailsComponent } from './prayerdetails/prayerdetails.component';
import { PrayerlistComponent } from './prayerlist/prayerlist.component';
import { OurRadioComponent } from './our-radio/our-radio.component';
import { PodcastlistComponent } from './podcastlist/podcastlist.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { AuthGuard } from './auth/auth.guard';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { Min1Component} from './min1/min1.component'
import { Min2Component } from './min2/min2.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent,
      canActivate: [AuthGuard],
      canActivateChild: [AuthGuard],
      children: [
        {path: '', redirectTo: 'create', pathMatch: 'prefix'},
        {path: 'prayer-list', component: PrayerlistComponent},
        {path: 'radio', component: OurRadioComponent},
        {path: 'podcast', component: PodcastComponent},
        {path: 'create', component: CreateArticleComponent},
        {path: 'notification', component: ViewContactsComponent},
        { path: 'createPub', component: Min1Component}, //publications
      ] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '*', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'prayer', component: RequestModalComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'blog', component: ArticlesComponent},
  { path: 'blog-details', component: ArticleComponent},
  { path: 'prayer-list', component: PrayerlistComponent},
  { path: 'prayer-details/:id', component: PrayerdetailsComponent},
  { path: 'podcastlist', component: PodcastlistComponent},
  { path: 'advert', component: Min2Component}, //publications
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only #AIzaSyBfZ86mdGX5E7o4PGSB7ct22axSb_JzVTY
      ),
  
  
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
