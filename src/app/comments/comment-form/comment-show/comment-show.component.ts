import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleriesService } from '../../../services/galleries.service';
import { Comment } from '../../../models/comment';
import { AuthService } from '../../../services/auth.service';



@Component({
  selector: 'app-comment-show',
  templateUrl: './comment-show.component.html',

})
export class CommentShowComponent {
private id: number;  
private comments: Comment [];
private comment;
@Output() onDelete = new EventEmitter<Comment>();

    constructor(private galleriesService: GalleriesService, private route: ActivatedRoute, private auth: AuthService){

    }
    public ngOnInit(){
                    let id =this.route.params.subscribe(params => {
                        this.id = +params['id'];
                    this.galleriesService.getGalleryComments(this.id)
                        .subscribe((data) => {
                        this.comments = data; 
                    });
                });
    }
    
    public checked() {
        return this.auth.user.id === this.comment.user.id
       }

    public delete(comment: Comment) {
    this.onDelete.emit(comment);
    }
    
    
}
