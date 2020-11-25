import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({

  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router: Router, 
    private authService: AuthService) { }

  islogged: boolean;
   role: string;

  ngOnInit() {
    
    if (localStorage.getItem('currentUser')) {
      this.islogged = true;
      console.log(this.authService.currentUserValue.usertypes_code);

      if (this.authService.currentUserValue.usertypes_code == 'ADM'){ this.role = "ADMINISTRATOR"
    } else { this.role = "USER" }

    return this.role
   
   
  }
  
 


  }
  onLogout(){

    this.authService.logout();
    this.islogged = false
   
   }
}
