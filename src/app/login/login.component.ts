import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import {User} from '../model/user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: string;
role: string;
  islogged: boolean;
  isLoginMode = true;
  model: any = {};
  loading = false;
  returnUrl: string;
  error = '';
  currentUser= localStorage.getItem('currentUser');
  navigationSubscription;
  constructor( private route: ActivatedRoute,
    private router: Router, 
    private authService: AuthService) { this.router.navigate(['/login'] );
  }


  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode
  }



  ngOnInit() {   
      

    if (localStorage.getItem('currentUser')) {
      this.islogged = true;
      console.log(this.authService.currentUserValue.usertypes_code);

      if (this.authService.currentUserValue.usertypes_code == 'ADM'){ this.role = "ADMINISTRATOR", this.returnUrl = "/admin";
    } else { this.role = "USER", this.returnUrl = "/quiz" }
     this.role, this.router.navigate([this.returnUrl]);

   
   
  }

}

  onSubmit(form: NgForm){

    const username = form.value.username
    const password = form.value.password
    console.log(form.value);
    this.authService.login(username, password).pipe(first())
    .subscribe(
        data => {
          localStorage.getItem('currentUser'),
            this.islogged = true
            return this.role, this.router.navigate(['/login'] );
          
   
        },
        error => {
            this.error = error;
        });
        return this.role, this.router.navigate(['/login'] );

      
       
  }
  
  onLogout(){

   this.authService.logout();
   this.islogged = false
  
  }

}