import { Component, OnInit } from '@angular/core';
import { GalleriesService } from '../services/galleries.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Gallery } from '../models/gallery';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  providers:[GalleriesService]
})
export class AuthorPageComponent implements OnInit {

  public galleries: Gallery [];

  constructor(private galleriesService: GalleriesService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(() => {
        let id = +this.route.snapshot.paramMap.get('id');
   
    this.galleriesService.getAuthorGalleries(id).subscribe(data => {
      this.galleries = this.galleriesService.getPaginatedGalleries();
     },
     (err: HttpErrorResponse) => {
       alert(`Backend returned code ${err.status} with message: ${err.error}`);
      });
     });
  }
  public loadMore() {
  this.galleries.push(...this.galleriesService.getPaginatedGalleries());
  }
  
}
