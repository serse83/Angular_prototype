import { Component, OnInit, ViewChild  } from '@angular/core';
import { first } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { Quizsection } from '../../model/quizsection.model';
import { QuestionCategory } from '../../model/questioncategory.model';
import { Router, NavigationExtras } from '@angular/router';
import { Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient, HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';
import { Question } from '../../model/question.model';
import { AnswerService } from "../../service/answer.service";
import{Quiz} from '../../model/quiz.model'
import { QuestionService } from "../../service/question.service";
import { Answertype } from '../../model/answertypes.model';
import { Answer } from '../../model/answers.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  form: FormGroup;
  quizsections: Quizsection[];
  quizcategories: QuestionCategory[];
  questions: Question[];
  quizs: Quiz[];
  answers: Answer[];
  id: string;
  name:string;
  answertypes: Answertype[];
  questioncategories_id:string;
  answertypes_id: string;
  questions_id: number;
  isCorrect: boolean;
  code: string;
  quizsections_id:string;
  duration:string;


  constructor(private questionService: QuestionService, public fb: FormBuilder, private answerService: AnswerService, private router: Router) { }

  ngOnInit() {
    this.getsectionform();
    this.getquestions();
    this.getanswertypes();
    this.getanswers();
    this.getquiz();


  }
  
  //chiamate API da rividere per modifiche su database 


  addquizsectionForm(form: NgForm){
  
    this.questionService.addquizsection(this.id,this.name).pipe(first())
    .subscribe(quizsection => this.quizsections.push(quizsection),
    (res) => console.log(res),
  )
 return this.name = "";
}

  
  addquizcategories(form: NgForm){
  
    this.questionService.addquizcategories(this.id,this.name).pipe(first())
    .subscribe(quizcategory => this.quizcategories.push(quizcategory),
    (res) => console.log(res),
  )}
  
  addquestion(form: NgForm){

  this.questionService.addquestion(this.id,this.name,this.questioncategories_id,this.answertypes_id).pipe(first())
 .subscribe(quizsection => this.quizsections.push(quizsection),
  (res) => console.log(res),
  )}
  
  addanswer(form: NgForm){

  this.answerService.addanswers(this.id,this.name,this.questions_id,this.isCorrect).pipe(first())
 .subscribe(answer => this.answers.push(answer),
  (res) => console.log(res),
  )}
  
  addanswertype(form: NgForm){

  this.answerService.addanswertypes(this.id,this.name,this.code).pipe(first())
 .subscribe(answertype => this.answertypes.push(answertype),
  (res) => console.log(res),
  
  )
  return this.name = "", this.code=""}
  
  getsectionform(){ this.questionService.getquizsection().pipe(first()).subscribe(quizsection => { 
    this.quizsections = quizsection; 
  })


  }
  
 // deletequestioncategories(id: string, name:string){ this.questionService.(id).subscribe(data => {
   // this.getsectionform(); }) 
//}

deletequizcategory(id: string, name:string){ this.questionService.deletequizsection(id).subscribe(data => {
  this.getsectionform(); }) 
}

deletequiz(id: string, name:string){ this.questionService.deletequiz(id).subscribe(data => {
  this.getsectionform(); }) 
}

deleteanswer(id: string, name:string){ this.answerService.deleteanswers(id).subscribe(data => {
  this.getsectionform(); }) 
}

deleteanswertype(id: string, name:string){ this.answerService.deleteanswertypes(id).subscribe(data => {
  this.getsectionform(); }) 
}

getanswertypes(){ this.answerService.getanswertypes().pipe(first()).subscribe(answertype => { 
  this.answertypes = answertype; 
}) 
}

getanswers(){ this.answerService.getanswers().pipe(first()).subscribe(answer => { 
  this.answers = answer; 
}) 
}

getquestions(){ this.questionService.getquestions().pipe(first()).subscribe(question => { 
  this.questions = question; 
}) 
}
getquiz(){this.questions = [];
  this.questionService.getquiz().pipe(first()).subscribe(quiz => { 
  this.quizs = quiz; 
})  
}

editquestion(id :string,name:string,questioncategories_id:string,answertypes_id:string) {
  
  let navigationExtras: NavigationExtras = {
      queryParams: {
        id, name, questioncategories_id, answertypes_id,      }
  }
  this.router.navigate(['/admin/update-question'], navigationExtras);
}

editquizsection(id :string,name:string) {
  
  let navigationExtras: NavigationExtras = {
      queryParams: {
        id, name      }
  }
  this.router.navigate(['/admin/update-quizsection'], navigationExtras);
}

editanswer(id: string,name: string, questions_id: string, isCorrect: boolean) {
  
  let navigationExtras: NavigationExtras = {
      queryParams: {
        id, name, questions_id, isCorrect     }
  }
  this.router.navigate(['/admin/update-answer'], navigationExtras);
}

editanswertype(id: string,name: string, code: string) {
  
  let navigationExtras: NavigationExtras = {
      queryParams: {
        id, name, code }
  }
  this.router.navigate(['/admin/update-answertype'], navigationExtras);
}


}
