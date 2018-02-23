import { Component, OnInit } from '@angular/core';
import { GalleriesService } from '../services/galleries.service';
import { Gallery } from '../models/gallery';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  providers:[GalleriesService]
})
export class AuthorPageComponent implements OnInit {

  private galleries: Gallery [];

  constructor(private galleriesService: GalleriesService, private route:ActivatedRoute) { }

   public ngOnInit() {    
      this.route.params.subscribe(() => {
               let id = +this.route.snapshot.paramMap.get('id');
          
           this.galleriesService.getAuthorGalleries(id).subscribe(data => {
             this.galleries = this.galleriesService.getPaginatedGalleries();
            });
          });
        }
      

  public loadMore() {
  this.galleries.push(...this.galleriesService.getPaginatedGalleries());
  }
  
}
