import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
 import {UserComponent} from "./user/user.component";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

  export class AdminComponent {
    
  }
      
    
    
                                  