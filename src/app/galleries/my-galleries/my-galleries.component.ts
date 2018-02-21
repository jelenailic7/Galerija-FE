import { Component, OnInit } from '@angular/core';
import { GalleriesService } from '../../services/galleries.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Gallery } from '../../models/gallery';

@Component({
  selector: 'app-my-galleries',
  templateUrl: './my-galleries.component.html',
})
export class MyGalleriesComponent implements OnInit {

  public galleries: Gallery [];

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
