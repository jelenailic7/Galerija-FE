import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/gallery';
import { ActivatedRoute } from '@angular/router';
import { GalleriesService } from '../../services/galleries.service';



@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html'
})
export class CommentFormComponent {

  private gallery: Gallery;

    constructor(private route:ActivatedRoute,
                private galleriesService:GalleriesService){

    }
    public ngOnInit() {   
    }    
 
}