import { Component, OnInit } from '@angular/core';
import { Publications } from '../models/publications'
import { PublicationService } from '../publication.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-min3',
  templateUrl: './min3.component.html',
  styleUrls: ['./min3.component.scss']
})

export class Min3Component implements OnInit {

  collectionSize: any;
  public publications: Observable<Publications[]>;
  previousUrl: any;
  nextUrl: any;
  constructor(private pubservice: PublicationService, private router: Router) { }

  ngOnInit(): void {
    this.pubservice.getAllPublication().subscribe(
      data =>{
        this.publications = data['results'];
        this.collectionSize = data['count'];
        this.nextUrl = data['next'];
        this.previousUrl = data['previous'];
        console.log(data);        
      },
      error =>{
        console.log(error.error);
      }
    );

  }
  getContentById(id:number){
    this.router.navigate(['poub-details'], {queryParams: {id: id}});
  } 

  getNext(){
    this.pubservice.getNextPublication(this.nextUrl).subscribe(
      data =>{
        this.pubservice = data['results'];
        this.collectionSize = data['count'];
        this.nextUrl = data['next'];
        this.previousUrl = data['previous'];
        console.log(data);
      },
      error =>{
        console.log(error.error);
      }
    )
  }
}
