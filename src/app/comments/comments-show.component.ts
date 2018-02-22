import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../models/comment';
import { ActivatedRoute } from '@angular/router';
import { GalleriesService } from '../services/galleries.service';



@Component({
  selector: 'app-comments-show',
  templateUrl: './comments-show.component.html'
})
export class CommentsShowComponent {
//@Input() comments: Comment[];

  private comments: Comment[];

    constructor(private route:ActivatedRoute,
                private galleriesService:GalleriesService){

    }
    public ngOnInit() {       
            let id = +this.route.snapshot.paramMap.get('id');
            this.galleriesService.getGalleryComments(id).subscribe(data => {
                this.comments = data;
                });
     }
}