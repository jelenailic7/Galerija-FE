import { Component, Injector,OnInit } from '@angular/core';
import { Gallery } from '../../models/gallery';
import { GalleriesService } from '../../services/galleries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
providers:[GalleriesService]
})
export class SearchPageComponent  {

 private galleries: Gallery[];
 private term;

    constructor(private route: ActivatedRoute,
                private galleriesService: GalleriesService) {
    }

public ngOnInit() {
    this.route.params.subscribe((params) => {
        this.galleriesService.search(params.term)
        .subscribe(data => {
            this.galleries = this.galleriesService.getPaginatedGalleries();
            this.term = params.term;
        });  
      }); 
    }
public loadMore() {
    this.galleries.push(...this.galleriesService.getPaginatedGalleries());
    }                
}     
    
    