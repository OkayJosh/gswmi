import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../podcast.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  blogdetail = {title: '', text: ''};
  constructor(private api:PodcastService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params.id;
    console.log(id);
    this.api.getpost(id).subscribe(
      data => {
        this.blogdetail = data;
        console.log(data);
      },
      error => {
        console.log(error.error);
      }
    );
  }

}
