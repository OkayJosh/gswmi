import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ministry } from '../models/ministry';
import { Observable } from 'rxjs/Observable';
import { MinistryService } from '../ministry.service';

@Component({
  selector: 'app-minitry',
  templateUrl: './minitry.component.html',
  styleUrls: ['./minitry.component.scss']
})
export class MinitryComponent implements OnInit {
  closeResult = '';
  modalcontent: any;
  public minstry: Observable<Ministry[]>;
  prevoiusUrl: any;
  nextUrl: any;
  collectionSize: any;
  constructor(private minService: MinistryService, private modalService: NgbModal) { }


  ngOnInit(){
    this.minService.getMinistries().subscribe(
      data =>{
        this.minstry = data['results'];
        this.collectionSize = data['count'];
        this.nextUrl = data['next'];
        this.prevoiusUrl = data['previous'];
        console.log(data);
      },
      error =>{
        console.log(error.error);
      }
    );
  }

  getNext(){
    this.minService.getNextMinistry(this.nextUrl).subscribe(
      data =>{
        this.minstry = data['results'];
        this.collectionSize = data['count'];
        this.nextUrl = data['next'];
        this.prevoiusUrl = data['previous'];
        console.log(data);
      },
      error =>{
        console.log(error.error);
      }
    );    
  }
  getPrevious(){
    this.minService.getNextMinistry(this.prevoiusUrl).subscribe(
      data =>{
        this.minstry = data['results'];
        this.collectionSize = data['count'];
        this.nextUrl = data['next'];
        this.prevoiusUrl = data['previous'];
        console.log(data);
      },
      error =>{
        console.log(error.error);
      }
    );    
  }
}
