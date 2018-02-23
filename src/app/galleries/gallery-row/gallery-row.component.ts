import { Component, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Gallery } from '../../models/gallery';


@Component({
  selector: 'app-gallery-row',
  templateUrl: './gallery-row.component.html'
})
export class GalleryRowComponent {

@Input() gallery: Gallery;



constructor(){
    
}

}