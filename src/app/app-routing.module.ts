import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleriesComponent } from './galleries/galleries.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyGalleriesComponent } from './galleries/my-galleries/my-galleries.component';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { GalleryFormComponent } from './galleries/gallery-form/gallery-form.component';
import { AuthorPageComponent } from './author-page/author-page.component';
import { GalleryShowComponent } from './galleries/gallery-show/gallery-show.component';
import { GalleryResolver } from './resolvers/gallery.resolver';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';



const appRoutes: Routes = [
    { path: '', 
    redirectTo: '/galleries',
    pathMatch: 'full'
   },
    { path:'galleries',
      component: GalleriesComponent  },

      { path:'login',
      component: LoginComponent  },

      { path:'register',
      component: RegisterComponent },

      { path:'my-galleries',
      component: MyGalleriesComponent
      },
      { path:'create',
      component: GalleryFormComponent
      },
      { path:'galleries/search/:term',
      component: SearchPageComponent },

      { path:'author/:id',
      component: AuthorPageComponent },

      { path:'galleries/:id',
      component: GalleryShowComponent,
      resolve: {
        gallery: GalleryResolver
        } 
    },
    { path:'galleries/:id/comments',
    component: CommentFormComponent},
    
    { path: 'edit-gallery/:id',
    component: GalleryFormComponent }, 
];

@NgModule({
    imports: [
      RouterModule.forRoot(
       appRoutes
      )
    ],
    exports: [ RouterModule
    ]
})
    export class AppRoutingModule {}