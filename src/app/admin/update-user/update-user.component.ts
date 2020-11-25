import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user.model';
import {FormBuilder, FormGroup} from "@angular/forms";
import {first} from "rxjs/operators";
import { Router,ActivatedRoute } from '@angular/router';
import {Role} from '../../model/role.model';
import {Status} from '../../model/status.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

 

    constructor(private formBuilder: FormBuilder,private router: Router,private activatedRoute: ActivatedRoute, private userService: UserService, private route: ActivatedRoute) {this.route.queryParams.subscribe(params => {
      params; })}

      
      users: User[];

      form: FormGroup;
      id : string;
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
      missing = this.gettype();
      roles: Role[];
      statuses: Status[];
selectedstatus: string
      ngOnInit() {

        this.getstatus();
        this.gettype();
      this.route.queryParams.subscribe(params => {
        
        this.id = params.id;
        this.email = params.email;
        this.username = params.username;
        this.surname = params.surname;
       this.usertypes_id = params.usertypes_id
        this.name = params.name;
        this.surname = params.surname;
        this.updatedAt = null;
        this.lastLogin = null;
        this.createdAt = null;
        this.userstatus_id = params.userstatus_id;

     
if (this.usertypes_id == 'admin'){
  return this.usertypes_id = '1'
}

if (this.usertypes_id == 'candidate'){
  return this.usertypes_id = '2'
}      



}   

      )
   

      if (this.userstatus_id == 'active'){
        return this.userstatus_id = '1'
      }
      
      if (this.userstatus_id == 'suspended'){
        return this.userstatus_id = '2'
      }       



   }
    
    edituserForm(form: FormGroup) {
      
      this.userService.edituser(this.id,this.name,this.surname,this.email,this.username,this.password, this.usertypes_id,
        this.userstatus_id,this.createdAt, this.updatedAt,this.lastLogin).pipe(first())
       .subscribe(users => this.users.push(users)
      )
      return this.router.navigate(['/admin/user'] );   }


      getstatus(){          this.userService.getstatus().pipe(first()).subscribe(status => { 
        this.statuses = status} )
      }
      gettype(){  this.userService.gettype().pipe(first()).subscribe(role => { 
        this.roles = role;} )
      }
   

}
