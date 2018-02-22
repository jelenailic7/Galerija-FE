import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/gallery';
import { ActivatedRoute } from '@angular/router';
import { GalleriesService } from '../../services/galleries.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-gallery-show',
  templateUrl: './gallery-show.component.html'
})
export class GalleryShowComponent {

  private gallery: Gallery;

    constructor(private route:ActivatedRoute,
                private galleriesService:GalleriesService){

    }
    // public ngOnInit() {       
    //         let id = +this.route.snapshot.paramMap.get('id');
    //         this.galleriesService.getGalleryById(id).subscribe(data => {
    //             this.gallery = data;
    //             });
    //  }
    public ngOnInit() {
      this.route.data
          .subscribe((data: {gallery: Gallery}) => {
              this.gallery = data.gallery;
          });
        }

}