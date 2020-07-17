import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service'
import { Contact } from '../models/contact'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ContentChild } from '@angular/core';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.scss']
})
export class ViewContactsComponent implements OnInit {
  collectionSize = '';
  public contacts: Observable<Contact[]>;
  previousUrl: any;
  nextUrl: any;
  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.contactService.getAllContact().subscribe(
      data =>{
        this.contacts = data['results'];
        this.collectionSize = data['count'];
        this.nextUrl = data['next'];
        this.previousUrl = data['previous'];
        console.log(data)
      },
      error => {
        console.log(error.error);
      }
    );

  }
  getContentById(id:number){
    this.router.navigate(['contact-details'], {queryParams: {id: id}});
  }
  getNext(){
    this.contactService.getNextContact(this.nextUrl).subscribe(
      data =>{
        this.contacts = data['results'];
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
