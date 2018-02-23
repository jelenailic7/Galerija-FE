import { Component,Input } from '@angular/core';
import { Gallery } from '../../models/gallery';
import { GalleriesService } from '../../services/galleries.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-gallery-form',
    templateUrl: './gallery-form.component.html',
})
export class GalleryFormComponent  {

    public gallery: Gallery = new Gallery();

    public galleryId:number;

    private selected:boolean;


    constructor(
        private galleriesService: GalleriesService,
        private router: Router,
        private route: ActivatedRoute

    ){ console.log(this.gallery.id)}
    

    public ngOnInit(){
            let id = +this.route.snapshot.paramMap.get('id');
            this.galleryId=id;

    }


    public cancel() {
        this.router.navigate(['/my-galleries']);
    }

    submit(gallery: Gallery) {
        if (this.galleryId) {
          this.galleriesService.editGallery(gallery, this.galleryId)
            .subscribe();
          this.router.navigate(['/galleries', this.galleryId]);   
        } else {
          this.galleriesService.addGallery(this.gallery)
            .subscribe();
            this.router.navigate(['/my-galleries']);     
        }
      }
   
}