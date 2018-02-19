import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent  {

  constructor(private authService: AuthService, private router: Router) { }

 
  login(email,password) 
 {
   this.authService.login(email,password)
    .subscribe(()=>{
      this.router.navigateByUrl('/');
    },
    (err: HttpErrorResponse)=> {
      alert(`${err.error.error}`);
    }
    );
  }

}
