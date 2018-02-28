import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Gallery } from '../../models/gallery';
import { ActivatedRoute } from '@angular/router';
import { GalleriesService } from '../../services/galleries.service';
import { Comment } from '@angular/compiler';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gallery-show',
  templateUrl: './gallery-show.component.html',
  providers:[GalleriesService]
})
export class GalleryShowComponent {

  private id: number;
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
            let id = +this.route.params.subscribe(params => {
              this.id = +params['id'];
            });
            this.galleriesService.addComment(comment, this.id)
             .subscribe((comment) => {
               this.comment = comment;
         });    
   }  
   public deleteComment(comment){
        alert('Are you sure you want to delete this comment?');
        this.galleriesService.deleteComment(comment)
        .subscribe();
     
   }

   public deleteGallery(gallery){
     alert('Are you sure you want to delete this gallery?');
     this.galleriesService.removeGallery(gallery).subscribe();
     this.router.navigate(['/my-galleries']);
   }




   public editGallery(gallery){   
     this.router.navigate(['/edit-gallery', this.gallery.id]);
     
   }
    
   public checked() {
    return this.auth.user.id === this.gallery.user.id
   }

}