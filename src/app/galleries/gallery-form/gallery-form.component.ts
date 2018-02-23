import { Component,Input } from '@angular/core';
import { Gallery } from '../../models/gallery';
import { GalleriesService } from '../../services/galleries.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-gallery-form',
    templateUrl: './gallery-form.component.html',
})
export class GalleryFormComponent  {

    public gallery: Gallery = new Gallery();

    public selected:boolean;

    constructor(
        private galleriesService: GalleriesService,
        private router: Router
    ) { }

   

    public submit(gallery: Gallery) {
        this.galleriesService.addGallery(gallery).subscribe();
            this.router.navigate(['/my-galleries']);
     
    }
    public cancel() {
        this.router.navigate(['/my-galleries']);
    }


    // submitContact(contact: Contact) {
    //     if (contact.id) {
    //       this.contactService.editContact(contact)
    //         .subscribe(
    //           (contact: Contact) => {
    //             let existing = this.contacts.filter(c => c.id == contact.id);
    //             if (existing.length) {
    //               Object.assign(existing[0], contact);
    //             }
    //           }
    //         );
    //     } else {
    //       this.contactService.addContact(contact)
    //         .subscribe(
    //           contact => {
    //             this.contacts.push(contact);
    //           }
    //         );
    //     }
    //   }
   
}