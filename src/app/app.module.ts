import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { MyGalleriesComponent } from './galleries/my-galleries/my-galleries.component';
import { CreateGalleryComponent } from './create-gallery/create-gallery.component'
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { GalleriesService } from './services/galleries.service';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    GalleriesComponent,
    MyGalleriesComponent,
    CreateGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule, 
    HttpClientModule,
  ],
  providers: [AuthService, GalleriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
