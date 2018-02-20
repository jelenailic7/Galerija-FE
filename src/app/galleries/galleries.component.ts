import { Component, OnInit } from '@angular/core';
import { GalleriesService } from '../services/galleries.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Gallerie } from '../models/gallerie';


@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
})
export class GalleriesComponent implements OnInit {

  public galleries: Gallerie [];
  public show = 5;
  constructor(private galleriesService: GalleriesService) { }

  ngOnInit() {
    this.galleriesService.getGalleries().subscribe(data => {
      this.galleries = this.galleriesService.getPaginatedGalleries();
     },
     (err: HttpErrorResponse) => {
       alert(`Backend returned code ${err.status} with message: ${err.error}`);
     
     });
  }
  public loadMore() {
  this.galleries.push(...this.galleriesService.getPaginatedGalleries());
  }
  

}
// this.userService.getUsers(); // Do this in the on init function
// this.users = this.userService.getPaginatedUsers();
// loadMore() {
//   this.users.push(...this.userService.getPaginatedUsers);
// }