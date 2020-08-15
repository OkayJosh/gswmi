import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Article } from '../models/article';
import { Observable } from 'rxjs/Observable';
import { ArticleService } from '../article.service';
import { PodcastService } from '../podcast.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  closeResult = '';
  modalcontent: any
  public article: Observable<Article[]>;
  podcastlist: any;
  constructor(private modalService: NgbModal, private articleService: ArticleService, private api:PodcastService, private router: Router) { }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    // const modal = document.getElementsByTagName('ng-template')[0];
    body.classList.add('landing-page');
    // setTimeout(function () {
    //   open(modal)
    // }, 6000)
    this.articleService.getArticles().subscribe(
      data =>{
        this.article = data['results'];
        console.log(data);
      },
      error =>{
        console.log(error.error);
      }
    );
    this.api.getPodcasts().subscribe(
      data => {
        this.podcastlist = data['response']['items'];
      },
      error => {
        console.log(error.error);
      }
    );
  }

  getPodcastById(id:number){
    this.router.navigate(['podcast-details'], {queryParams: {id: id}});
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  getContentById(id:number){
    this.router.navigate(['blog-details', id ], {queryParams: {id: id}});
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
  }

}
