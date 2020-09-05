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
import { Min3Component } from './min3/min3.component';
import { Min4Component } from './min4/min4.component';
import { MinitryComponent } from './minitry/minitry.component'
import { CreateMinComponent } from './create-min/create-min.component'
import { EventComponent } from './event/event.component'
import { CreateEventComponent} from './create-event/create-event.component'
import { SpeakersComponent } from './speakers/speakers.component';
import { MinDetailsComponent } from './min-details/min-details.component';
import { GiveComponent } from './give/give.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent,
      canActivate: [AuthGuard],
      canActivateChild: [AuthGuard],
      children: [
        {path: '', redirectTo: 'notification', pathMatch: 'prefix'},
        {path: 'prayer-list', component: PrayerlistComponent},
        {path: 'radio', component: OurRadioComponent},
        {path: 'podcast', component: PodcastComponent},
        {path: 'create', component: CreateArticleComponent},
        {path: 'notification', component: ViewContactsComponent},
        { path: 'createPub', component: Min1Component}, //publications
        {path: 'createadvert', component: Min2Component},
        { path: 'create-min', component: CreateMinComponent},
        { path: 'create-event', component: CreateEventComponent},
      ] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '*', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'prayer', component: RequestModalComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'blog', component: ArticlesComponent},
  { path: 'blog-details/:id', component: ArticleComponent},
  { path: 'podcast-details', component: Min4Component},
  { path: 'min-details/:id', component: MinDetailsComponent},
  { path: 'prayer-list', component: PrayerlistComponent},
  { path: 'prayer-details', component: PrayerdetailsComponent},
  { path: 'podcastlist', component: PodcastlistComponent},
  { path: 'publications', component: Min3Component}, //publications
  { path: 'ministries', component: MinitryComponent},
  { path: 'events', component: EventComponent},
  { path: 'speakers', component: SpeakersComponent},
  { path: 'give', component: GiveComponent},
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
