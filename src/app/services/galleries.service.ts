import { Injectable } from '@angular/core';
import { Gallerie } from '../models/gallerie';
import { Observable, Observer } from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class GalleriesService {

private galleries: Gallerie []=[];

public _url = 'http://localhost:8000/api/galleries/';

  constructor(private http: HttpClient, private authService: AuthService) {

   }
 

 public getGalleries()
  {  
      return new Observable((o: Observer<any>) => {
       this.http.get(this._url, {
        headers: this.authService.getRequestHeaders(),
       }).subscribe((galleries: any[]) => {
            galleries.forEach(gallerie => {
              this.galleries.push (new Gallerie (
                gallerie.id,
                gallerie.name,
                gallerie.description,
                gallerie.image_url,
                gallerie.user,
                gallerie.created_at)
            )});
            o.next(this.galleries);
            o.complete();
          });   
      });
  }

//   public search(term) {
//     return new Observable((o: Observer<any>) => {
//       let params = new HttpParams().append('term',term);
//         this.http.get(this._url, {params,
//          headers: this.authService.getRequestHeaders(),
//         }).subscribe((galleries: any) => {
//           this.galleries = galleries.map((gallerie)=>{
//             return new Gallerie(
//                 gallerie.id,
//                 gallerie.name,
//                 gallerie.decription,
//                 gallerie.image_url,
//                 gallerie.user_id,
//                 gallerie.created_at)
//           });
//           o.next(this.galleries);
//           o.complete();
//         });
//       });   
//     }



//  public addGallerie(gallerie: Gallerie){
//    return new Observable((o: Observer<any>) => {
//      this.http.post(this._url, {
//         'name': gallerie.name,
//         'description': gallerie.description,
//         'image_url': gallerie.image_url,
//         'user_id': gallerie.user_id,
//         'created_at': gallerie.created_at
//      },
//      {
//       headers: this.authService.getRequestHeaders(),
//      })
//      .subscribe((g:any)=> {
//        let newGallerie = new Gallerie(g.id,g.name, g.description, g.image_url, g.user_id,g.created_at);
//        this.galleries.push(newGallerie);
//        o.next(newGallerie);
//        return o.complete();
//      });
//    });
//  }


//  public getGallerieById(id){
//    return new Observable((o: Observer<any>) => {
//      this.http.get(this._url + id,
//       {
//         headers: this.authService.getRequestHeaders(),
//       }).subscribe((gallerie:any) => {
//         let newGallerie = new Gallerie( 
//             gallerie.id,
//             gallerie.name,
//             gallerie.decription,
//             gallerie.image_url,
//             gallerie.user_id,
//             gallerie.created_at)
//         o.next(newGallerie);
//           return o.complete();
//       });
//    });
//  }
  
}