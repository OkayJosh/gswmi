import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../podcast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {
  podcastlist = [];
  nexturl = '';
  constructor(private api:PodcastService, private router: Router) { }
getPodcast(){
  this.api.getPodcasts().subscribe(
    data => {
      this.podcastlist = data['response']['items'];
      this.nexturl = data["response"]["next_url"];
      console.log(data['response']['item']);
    },
    error => {
      console.log(error.error);
    }
  );
}
getPodcastById(id:number){
  this.router.navigate(['podcast-details'], {queryParams: {id: id}});
}
getNext(){
this.api.getNextPodcast(this.nexturl).subscribe(
  data => {
    console.log(data['response']['items']);
    this.podcastlist = data['response']['items'];
    if (data["response"]["next_url"] == null){
      this.nexturl = '';
    }else {
      this.nexturl = data["response"]["next_url"];
    }

  },
  error => {
    console.log(error.error);
  }
);
}
ngOnInit(): void {
    this.getPodcast();
  }

}
