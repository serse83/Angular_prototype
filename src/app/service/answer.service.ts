import { Injectable } from '@angular/core';
import { AuthService} from './auth.service'
import { HttpClient, HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';
import { Answertype } from '../model/answertypes.model';
import { Answer } from '../model/answers.model';
import { Observable, of,BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class AnswerService {
  
  
    constructor(private http: HttpClient, private authService: AuthService, ) {  
    }

    getanswertypes() {

        return this.http.get<Answertype[]>('#/admin/answertypes/list', {
           
      })  
      }
    
      getanswers() {

        return this.http.get<Answer[]>('#/admin/answers/list', {
           
      })  
      }
      addanswers (id: string,name:string, questions_id:number, isCorrect:boolean): Observable<Answer> {
  
        return  this.http.post<Answer>('#/admin/answer/add', {id:id, name:name, questions_id:questions_id,isCorrect:isCorrect }) 
        
        }

        addanswertypes (id: string,name:string, code:string): Observable<Answertype> {
  
          return  this.http.post<Answertype>('#/admin/answertype/add', {id:id, name:name, code:code }) 
          
          }
    
          deleteanswertypes(id: string)  {

            return this.http.delete<Answertype>('#/admin/answertype/'+id+'/delete', {
          })  
          }

          deleteanswers(id: string)  {

            return this.http.delete<Answer>('#/admin/answer/'+id+'/delete', {
          })  
          }
          editanswertype(id: string,name:string,code: string) {
            return this.http.put<Answertype>('#/admin/answertype/'+id+'/edit', { id:id, name:name,code: code })
          };
      
    }