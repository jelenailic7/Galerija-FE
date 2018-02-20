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
  constructor(private galleriesService: GalleriesService) { }

  ngOnInit() {
    this.galleriesService.getGalleries().subscribe(data => {
      this.galleries = data;
      console.log(this.galleries[0].user_id);
     },
     (err: HttpErrorResponse) => {
       alert(`Backend returned code ${err.status} with message: ${err.error}`);
     
     });
  }
  

}
