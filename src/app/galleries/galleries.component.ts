import { Component, OnInit } from '@angular/core';
import { GalleriesService } from '../services/galleries.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Gallery } from '../models/gallery';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
})
export class GalleriesComponent implements OnInit {

  public galleries: Gallery []=[];

  constructor(private galleriesService: GalleriesService, private auth: AuthService) { }

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
