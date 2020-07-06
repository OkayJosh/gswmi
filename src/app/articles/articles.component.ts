import { Component, OnInit } from '@angular/core';
// import { ArticleService } from './article' 
import { PodcastService } from '../podcast.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  bloglist = [];
  constructor(private api:PodcastService) { }

  ngOnInit(): void {
    this.api.allpost().subscribe(
      data => {
        this.bloglist = data;
        console.log(data);
      },
      error => {
        console.log(error.error);
      }
    );
  }
}
