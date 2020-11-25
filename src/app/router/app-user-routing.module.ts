import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import  {UserComponent} from '../admin/user/user.component';




const routes: Routes = [
 { path: 'user', component: UserComponent }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppUserRoutingModule { }
