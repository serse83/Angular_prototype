import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Role } from '../model/role.model';
import { Status } from '../model/status.model';

import { AuthService} from './auth.service'
import { HttpClient, HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
   //   this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  gettoken = this.authService.currentUserValue.token;
  constructor(private http: HttpClient, private authService: AuthService, ) {  
}
private currentUsereditSubject: BehaviorSubject<User>;
public currentUseredit: Observable<User>;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  

  getAll() {console.log(this.authService.currentUserValue.token)

      return this.http.get<User[]>('http://restquesttest.cgmdev.org/admin/users/list', {
         
}
      )


     
      
}
getAllUsertypes() {console.log(this.authService.currentUserValue.token)

  return this.http.get<[]>('http://restquesttest.cgmdev.org/admin/usertype/list', {
     
}
  )



  
}

public get currentUserValue(): User {
  return this.currentUsereditSubject.value;
}

getUsers(user: any): Observable<User[]> {
  return this.http.get<User[]>('http://restquesttest.cgmdev.org/admin/user/list')
  .pipe(
    tap(data => {localStorage.setItem('currentUseredit', JSON.stringify(user));
    this.currentUsereditSubject.next(user);
    return user  ;   

  }
    
  
    )) 
}
     
addUser (id: string,name:string,surname:string,username:string,password: string, email:string,   usertypes: string, userstatus_id: string, lastLogin: Date,updatedAt: Date,createdAt:Date ): Observable<User> {
  
return  this.http.post<User>('http://restquesttest.cgmdev.org/admin/users/add', {id:id, name:name, surname:surname, username:username, password: password, email:email,  usertypes: usertypes, userstatus_id: userstatus_id,lastLogin:lastLogin,createdAt:createdAt, updatedAt:updatedAt}) 

}






edituser(id: string,name:string,surname:string,email:string, username:string,  password:string,  usertypes_id: string, userstatus_id: string, lastLogin: Date,updatedAt: Date,createdAt:Date ) {


  return this.http.put<User>('http://restquesttest.cgmdev.org/admin/user/'+id+'/edit', { name:name, surname:surname, email:email, username:username, password:password, usertypes_id: usertypes_id, userstatus_id: userstatus_id,lastLogin:lastLogin,createdAt:createdAt, updatedAt:updatedAt})

};

getstatus(): Observable<Status[]> {

  return this.http.get<Status[]>('http://restquesttest.cgmdev.org/admin/userstatus/list', {
        
})  
}

gettype(): Observable<Role[]> {

  return this.http.get<Role[]>('http://restquesttest.cgmdev.org/admin/usertype/list', {
     
})  
}
}
 

