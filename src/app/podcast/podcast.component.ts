import { Component, OnInit } from '@angular/core';
import { PodcastService } from "../podcast.service";

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {
  podcastlist = []
  constructor(private api:PodcastService) { }

  getPodcast(){
    this.api.allpostcast().subscribe(
      data => {
        this.podcastlist = data
        console.log(data);
      },
      error => {
        console.log(error.error)
      }
    )
  }
  ngOnInit(): void {
    this.getPodcast();
  }

}
