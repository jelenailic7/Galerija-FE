import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { GalleriesService } from '../services/galleries.service';
import { Gallery } from '../models/gallery';

 
@Injectable()
export class AuthorResolver implements Resolve<any> {

  constructor(private galleriesService: GalleriesService) {}
 galleries: Gallery[];
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let id = parseInt(route.paramMap.get('id'));
 
    return this.galleriesService.getAuthorGalleries(id);
           
  }
  


public loadMore() {
    this.galleries.push(...this.galleriesService.getPaginatedGalleries());
    }

}