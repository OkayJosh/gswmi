import { Component, OnInit } from '@angular/core';
import { MinistryService } from '../ministry.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-min-details',
  templateUrl: './min-details.component.html',
  styleUrls: ['./min-details.component.scss']
})
export class MinDetailsComponent implements OnInit {



  res: any;
  title: any;
  content: any;
  featured_image: any;
  constructor(private minService:MinistryService, private route: ActivatedRoute) { }

  ngOnInit(){
    let id= this.route.snapshot.queryParams["id"];
    this.getContentById(id);
  }

  getContentById(id:number){
    this.minService.getMinistry(id).subscribe((data:any)=>{
      this.res=data;
      this.title=this.res['name'];
      this.content=this.res['info'];
      this.featured_image = this.res['image'];
      console.log(this.res);
    });
  }
}
