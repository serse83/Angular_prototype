import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { User } from '../../model/user.model';
import { UserService } from '../../service/user.service';
import { Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router, NavigationExtras } from '@angular/router';
import {Role} from '../../model/role.model';
import {Status} from '../../model/status.model';
import {FilterPipe} from '../../filter/filter.pipe'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  form: FormGroup;
  id: string;
  usertypes_id: string;
  userstatus_id: string;
  password: string;
  username:string;
  email: string;
  name:string;
  surname: string;
  createdAt:Date;
  updatedAt:Date;
  lastLogin:Date;
  selectedstatus= '0';
  selectedrole='0';
  usernameSearch: string = "";
  nameSearch: string = "";
  emailSearch: string = "";
  selected_count: number = 0;
 displayName: string = "";

 
  constructor(private userService: UserService, public fb: FormBuilder, private router: Router)  {
    }
    roles: Role[];
    users: User[];
    statuses: Status[];
          
  ngOnInit() {
     this.getstatus();
     this.gettype();
     this.getusers()
  

    }

  adduserForm(form: NgForm){
    console.log(this.form.value)

   this.userService.addUser(this.id,this.name,this.surname,this.username, this.password, this.email,this.usertypes_id,this.userstatus_id,this.createdAt,
    this.updatedAt,this.lastLogin).pipe(first())
   .subscribe(user => this.users.push(user),
    (res) => console.log(res),
  )
}


editUser(id: string, username: string, name: string, surname: string, email: string ,userstatus_id: string,usertypes_id: string) {
  
  let navigationExtras: NavigationExtras = {
      queryParams: {
        id, username, name, surname, email,userstatus_id,usertypes_id      }
  }
  this.router.navigate(['/admin/update-user'], navigationExtras);
}

getstatus(){          this.userService.getstatus().pipe(first()).subscribe(statuses => { 
  this.statuses = statuses;} )
}
gettype(){  this.userService.gettype().pipe(first()).subscribe(roles => { 
  this.roles = roles;} )}

  getusers(){ this.userService.getAll().pipe(first()).subscribe(users => { 
    this.users = users; 
})

  }
  clearusername() {
    this.usernameSearch = "";
  } 

  clearname() {
    this.nameSearch = "";
  } 

  clearemail() {
    this.emailSearch = "";
  } 


  }





  
  
                                
