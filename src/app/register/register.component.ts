import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
public accepted_terms = false;
  constructor() { }

  ngOnInit() {
  }

}
