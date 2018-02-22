import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/gallery';
import { ActivatedRoute } from '@angular/router';
import { GalleriesService } from '../../services/galleries.service';
import { Comment } from '@angular/compiler';


@Component({
  selector: 'app-gallery-show',
  templateUrl: './gallery-show.component.html'
})
export class GalleryShowComponent {

  private gallery: Gallery;
  private comment: Comment;

    constructor(private route:ActivatedRoute,
                private galleriesService:GalleriesService){

    }

    public ngOnInit() {
      this.route.data
          .subscribe((data: {gallery: Gallery}) => {
              this.gallery = data.gallery;
              
          });
        }
    
    

}