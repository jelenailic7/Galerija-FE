import { Injectable } from '@angular/core';
import { Gallery } from '../models/gallery';
import { Observable, Observer } from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class GalleriesService {

offset : number = 0;

private galleries: Gallery []=[];

public _url = 'http://localhost:8000/api/galleries/';

  constructor(private http: HttpClient, private authService: AuthService) {

   }


 public getGalleries()
  {  
      return new Observable((o: Observer<any>) => {
       this.http.get(this._url, {
        headers: this.authService.getRequestHeaders(),
       }).subscribe((galleries: any[]) => {
            galleries.forEach(gallery => {
              this.galleries.push(new Gallery (
                gallery.id,
                gallery.name,
                gallery.description,
                gallery.image_url,
                gallery.user,
                gallery.created_at)
            )});
            o.next(this.galleries);
            o.complete();
          });   
      });
  }

  getPaginatedGalleries() {
    let tmp = this.galleries.slice(this.offset, this.offset + 10);
    this.offset += 10;
    return tmp;
  }

  public search(term) {
    return new Observable((o: Observer<any>) => {
      let params = new HttpParams().append('term',term);
        this.http.get(this._url, {params,
         headers: this.authService.getRequestHeaders(),
        }).subscribe((galleries: any) => {
          this.galleries = galleries.map((gallery)=>{
            return new Gallery(
                gallery.id,
                gallery.name,
                gallery.decription,
                gallery.image_url,
                gallery.user,
                gallery.created_at)
          });
          o.next(this.galleries);
          return o.complete();
        });
      });   
    }



//  public addGallerie(gallerie: Gallerie){
//    return new Observable((o: Observer<any>) => {
//      this.http.post(this._url, {
//         'name': gallery.name,
//         'description': gallery.description,
//         'image_url': gallery.image_url,
//         'user_id': gallery.user_id,
//         'created_at': gallery.created_at
//      },
//      {
//       headers: this.authService.getRequestHeaders(),
//      })
//      .subscribe((g:any)=> {
//        let newGallery = new Gallery(g.id,g.name, g.description, g.image_url, g.user_id,g.created_at);
//        this.galleries.push(newGallery);
//        o.next(newGallery);
//        return o.complete();
//      });
//    });
//  }


//  public getGalleryById(id){
//    return new Observable((o: Observer<any>) => {
//      this.http.get(this._url + id,
//       {
//         headers: this.authService.getRequestHeaders(),
//       }).subscribe((gallery:any) => {
//         let newgallery = new Gallery( 
//             gallery.id,
//             gallery.name,
//             gallery.decription,
//             gallery.image_url,
//             gallery.user_id,
//             gallery.created_at)
//         o.next(newGallery);
//           return o.complete();
//       });
//    });
//  }
  
}