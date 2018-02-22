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

   public ngOnInit() {
      this.route.data
          .subscribe((data:{galleries: Gallery[]})=>{
            this.galleries = data.galleries;
            data.galleries = this.galleriesService.getPaginatedGalleries();
           });        
        }
      

  public loadMore() {
  this.galleries.push(...this.galleriesService.getPaginatedGalleries());
  }
  
}
