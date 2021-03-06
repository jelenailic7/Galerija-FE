import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { MyGalleriesComponent } from './galleries/my-galleries/my-galleries.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { GalleriesService } from './services/galleries.service';
import { GalleryRowComponent } from './galleries/gallery-row/gallery-row.component';
import { SearchInputComponent } from './search/search-input/search-input.component';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { GalleryFormComponent } from './galleries/gallery-form/gallery-form.component';
import { AuthorPageComponent } from './author-page/author-page.component';
import { GalleryShowComponent } from './galleries/gallery-show/gallery-show.component';
import { GalleryResolver } from './resolvers/gallery.resolver';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentShowComponent } from './comments/comment-form/comment-show/comment-show.component';
import { AuthGuard } from './guards/auth.guard';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    GalleriesComponent,
    MyGalleriesComponent,
    GalleryFormComponent,
    GalleryRowComponent,
    SearchInputComponent,
    SearchPageComponent,
    AuthorPageComponent,
    GalleryShowComponent,
    CommentFormComponent,
    CommentShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule, 
    HttpClientModule,
  ],
  providers: [AuthService, GalleriesService, GalleryResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
