import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/gallery';
import { ActivatedRoute } from '@angular/router';
import { GalleriesService } from '../../services/galleries.service';
import { Comment } from '@angular/compiler';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gallery-show',
  templateUrl: './gallery-show.component.html'
})
export class GalleryShowComponent {

  private gallery: Gallery;
  private comment: Comment;
  private comments: Comment[];

    constructor(private route:ActivatedRoute,
                private galleriesService:GalleriesService,
                private auth: AuthService,
                private router: Router){

    }

    public ngOnInit() {
      this.route.data
          .subscribe((data: {gallery: Gallery}) => {
              this.gallery = data.gallery;
              
          });
        }

    public submit(comment) {
            let id = +this.route.snapshot.paramMap.get('id');
            this.galleriesService.addComment(comment, id)
             .subscribe((comment) => {
              this.comments.push(comment);
         });    
   }  

   public deleteGallery(gallery){
     alert('Are you sure you want to delete this gallery?');
     this.galleriesService.removeGallery(gallery).subscribe();
     this.router.navigate(['/my-galleries']);
   }

  //  public editGallery(gallery){
  //    this.galleriesService.editGallery(gallery).subscribe();
  //    this.router.navigate(['/my-galleries']);

  //  }
    

}