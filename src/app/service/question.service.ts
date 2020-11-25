import { Injectable } from '@angular/core';
import { Quizsection } from '../model/quizsection.model';
import { AuthService} from './auth.service'
import { HttpClient, HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of,BehaviorSubject } from 'rxjs';
import { Question } from '../model/question.model';
import { Answertype } from '../model/answertypes.model';
import { Quiz } from '../model/quiz.model';
import { QuestionCategory } from '../model/questioncategory.model';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {


  constructor(private http: HttpClient, private authService: AuthService, ) {  
  }
  
  getquizsection() {
    return this.http.get<Quizsection[]>('#/admin/quizsections/list')  
  }
   
  addquizsection (id: string,name:string): Observable<Quizsection> {
  
    return  this.http.post<Quizsection>('#/admin/quizsection/add', {id:id, name:name}) 
    
    }

  editquizsection(id: string,name:string) {
    return this.http.put<Quizsection>('#/admin/quizsection/'+id+'/edit', { name:name })
  };

  deletequizsection(id: string)  {

    return this.http.delete<Quizsection>('#/admin/quizsection/'+id+'/delete', {
  })  
  }

 
  getquizcategories() {

    return this.http.get<QuestionCategory[]>('#/admin/questioncategories/list', {
       
  })  
  }
 

  addquizcategories  (id: string,name:string): Observable<QuestionCategory> {
    return  this.http.post<QuestionCategory>('#/admin/questioncategory/add', {id:id, name:name}) 
  }
  
  editquizcategories(id: string,name:string) {
      return this.http.put<QuestionCategory>('#/admin/questioncategory/'+id+'/edit', { name:name })
  };

  
  deletequizcategories(id: string)  {

    return this.http.delete<QuestionCategory>('#/admin/questioncategory/'+id+'/delete', {
  })  
  }

  getquestions() {

    return this.http.get<Question[]>('#/admin/questions/list', {
       
  })  
  }
  
  
  addquestion (id: string,name:string,questioncategories_id: string,answertypes_id: string): Observable<Quizsection> {
    
    return  this.http.post<Question>('#/admin/question/add', {id:id, name:name, questioncategories_id: questioncategories_id,answertypes_id:answertypes_id }) 
    
    }
     
    editquestion(id: string,name:string,questioncategories_id: string,answertypes_id: string) {
      return this.http.put<Question>('#/admin/question/'+id+'/edit', { id:id, name:name, questioncategories_id: questioncategories_id,answertypes_id:answertypes_id })
    };
  
  deletequestion(id: string)  {

    return this.http.delete<Question>('#/admin/question/'+id+'/delete', {
  })  
  }


  deletequiz(id: string)  {

    return this.http.delete<Quiz>('#/admin/quiz/'+id+'/delete', {
  })  
  }

  
  getquiz() {

    return this.http.get<Quiz[]>('#/admin/quizs/list', {
       
  })  
  }












  getanswertypes() {

    return this.http.get<Answertype[]>('#/admin/answers/list', {
       
  })  
  }



}

