import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

public accepted_terms = false;
  
private user: User = new User;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  public ngOnInit() {
  }
  public register(){
    this.authService.addUser(this.user)
      .subscribe((user)=> {
        this.router.navigateByUrl('/login');
      },
        (err: HttpErrorResponse) => {
          alert(`Backend returned code ${err.status} with message: ${err.error}`);
        }
      );
}

}
