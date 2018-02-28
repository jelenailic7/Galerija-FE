import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleriesService } from '../../services/galleries.service';
import { Comment } from '../../models/comment';



@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html'
})
export class CommentFormComponent {
@Output() onSubmit = new EventEmitter<Comment>();

  private comment: Comment = new Comment();

    constructor(private route:ActivatedRoute,
                private galleriesService:GalleriesService){
               
    }


    public submit(comment: Comment) {
        this.onSubmit.emit(comment);
        this.comment = new Comment();
      }
 
}