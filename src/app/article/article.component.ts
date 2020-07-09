import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../podcast.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  blogdetail = {title: '', text: ''};
  constructor() { }
}
