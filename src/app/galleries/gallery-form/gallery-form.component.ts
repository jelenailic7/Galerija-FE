import { Component } from '@angular/core';
import { Gallery } from '../../models/gallery';
import { GalleriesService } from '../../services/galleries.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-gallery-form',
    templateUrl: './gallery-form.component.html',
})
export class GalleryFormComponent  {

    public gallery: Gallery = new Gallery();
   

    constructor(
        private galleriesService: GalleriesService,
        private router: Router
    ) { }

   

    public submit(gallery: Gallery) {
        this.galleriesService.addGallery(gallery).subscribe();
            this.router.navigate(['/my-galleries']);
    
    }
    public cancel() {
        this.router.navigate(['/my-galleries']);
    }
   
}