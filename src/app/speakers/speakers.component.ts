import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  public speakers: any;
  previousUrl: any;
  nextUrl: any;
  collectionSize: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data =>{
        this.speakers = data['results'];
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

  getNext(): void {
    this.userService.getNextUsers(this.nextUrl).subscribe(
      data =>{
        this.speakers = data['results'];
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

  getPrevious(): void {
    this.userService.getNextUsers(this.previousUrl).subscribe(
      data =>{
        this.speakers = data['results'];
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
