import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleriesService } from '../../../services/galleries.service';
import { Comment } from '../../../models/comment';



@Component({
  selector: 'app-comment-show',
  templateUrl: './comment-show.component.html'
})
export class CommentShowComponent {
    
private comments: Comment [];

    constructor(private galleriesService: GalleriesService, private route: ActivatedRoute){

    }
    public ngOnInit(){
                    let id = +this.route.snapshot.paramMap.get('id');
                    this.galleriesService.getGalleryComments( id)
                        .subscribe((data) => {
                        this.comments = data; 
                    });
    }
}
