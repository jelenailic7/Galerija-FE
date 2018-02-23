import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { GalleriesService } from '../services/galleries.service';

 
@Injectable()
export class GalleryResolver implements Resolve<any> {

  constructor(private galleriesService: GalleriesService) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let id = parseInt(route.paramMap.get('id'));
 
    return this.galleriesService.getGalleryById(id);
  }
  
}
   