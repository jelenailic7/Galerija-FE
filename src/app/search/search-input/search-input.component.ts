import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html'
})

export class SearchInputComponent  {

private searchTerm;

    constructor(private router: Router)
    {}

   public searchGallery(){
      this.router.navigate(['/galleries/search', this.searchTerm]);
    }
}