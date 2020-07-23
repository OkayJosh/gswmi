import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../podcast.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-min4',
  templateUrl: './min4.component.html',
  styleUrls: ['./min4.component.scss']
})
export class Min4Component implements OnInit {
  res: any;
  episode: any;
  error: any;

  constructor( private poadcastService:PodcastService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id= this.route.snapshot.queryParams["id"];
    this.getContentById(id);
  }

  getContentById(id:string){
    this.poadcastService.getPodcast(id).subscribe(
      data => {
        this.episode = data['response']['episode'];
        console.log(this.episode);

      },
      error=>{
        this.error = error.error;
      }
    );
  }

}
