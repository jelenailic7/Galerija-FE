import { Injectable } from '@angular/core';
import { Gallery } from '../models/gallery';
import { Observable, Observer } from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Comment } from '../models/comment';


@Injectable()
export class GalleriesService {

offset : number = 0;

private galleries: Gallery []=[];
private comments: Comment []=[];

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
                gallery.comments,
                gallery.created_at)
            )});
            o.next(this.galleries);
            o.complete();
          });   
      });
  }
  public getMyGalleries()
  {  
      return new Observable((o: Observer<any>) => {
       this.http.get('http://localhost:8000/api/my-galleries', {
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



 public addGallery(gallery: Gallery){
   return new Observable((o: Observer<any>) => {
     this.http.post(this._url, {
        'name': gallery.name,
        'description': gallery.description,
        'image_url': gallery.image_url,
     },
     {
      headers: this.authService.getRequestHeaders(),
     })
     .subscribe((g:any)=> {
       let newGallery = new Gallery(g.name, g.description, g.image_url);
       this.galleries.push(newGallery);
       o.next(newGallery);
       return o.complete();
     });
   });
 }

 public getAuthorGalleries(id)
 {  
     return new Observable((o: Observer<any>) => {
      this.http.get('http://localhost:8000/api/author/' + id, {
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


 public getGalleryById(id){
   return new Observable((o: Observer<any>) => {
     this.http.get(this._url + id,
      {
        headers: this.authService.getRequestHeaders(),
      }).subscribe((gallery:any) => {
        let newGallery = new Gallery( 
            gallery.id,
            gallery.name,
            gallery.description,
            gallery.image_url,
            gallery.user,
            gallery.user_id,
            gallery.created_at,
           );
        o.next(newGallery);
          return o.complete();
      });
   });
 }

 public getGalleryComments(id){
  return new Observable((o: Observer<any>) => {
    this.http.get('http://localhost:8000/api'+ '/comments/' +id,
     {
       headers: this.authService.getRequestHeaders(),
      }).subscribe((comments: any[]) => {
        comments.forEach(comment => {
          this.comments.push(new Comment (
            comment.id,
            comment.text,
            comment.user_id,
            comment.gallery_id,
            comment.created_at,
            comment.user )
        )});
        o.next(this.comments);
        o.complete();
      });   
    })
  }

  public addComment(comment: Comment, id){ 
    return new Observable((o: Observer<any>) => {
      this.http.post('http://localhost:8000/api'+ '/comments/' +id, {
        'id': comment.id,
        'text': comment.text,
        'gallery_id': id,
        'user_id': comment.user_id,
        'created_at': comment.created_at,
        'user':comment.user
      },
      {
      headers: this.authService.getRequestHeaders(),
      })
      .subscribe((c:any)=> {
        let newComment = new Comment(c.id, c.text, c.gallery_id,comment.user_id, c.created_at,c.user);
        this.comments.push(newComment);
        o.next(newComment);
        return o.complete();
      });
  });
}


public removeGallery(gallery: Gallery)
  {
    return new Observable((o: Observer<any>) => {
      this.http.delete('http://localhost:8000/api/galleries/' + gallery.id,
        {
          headers: this.authService.getRequestHeaders(),
        })
        .subscribe(
          () => {
            const index = this.galleries.indexOf(gallery);
            this.galleries.splice(index, 1);

            o.next(index);
            return o.complete();
          }
        );
    });
  }


  public editGallery(gallery: Gallery, id)
  {
    return new Observable((o: Observer<any>) => {
      this.http.put('http://localhost:8000/api/edit-gallery/' + id, {
        'name': gallery.name,
        'description': gallery.description,
        'image_url': gallery.image_url,
      },
      {
        headers: this.authService.getRequestHeaders(),
      })
        .subscribe(
          (gallery: any) => {
            let existing = this.galleries.filter(g => g.id == gallery.id);
            if (existing.length) {
              existing[0].name = gallery.name;
              existing[0].description = gallery.description;
              existing[0].image_url = gallery.image_url;
            }
            o.next(existing[0]); 
            return o.complete();
          }
        );
    });
  }
  public deleteComment(comment){
    return new Observable((o: Observer<any>) => {
      this.http.delete('http://localhost:8000/api'+ '/comments/' +comment.id,
        {
          headers: this.authService.getRequestHeaders(),
        })
        .subscribe(
          () => {
            const index = this.comments.indexOf(comment);
            this.comments.splice(index, 1);
            o.next(index);
            return o.complete();
          }
        );
    });
  }
  
}


