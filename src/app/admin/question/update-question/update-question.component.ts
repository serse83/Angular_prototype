import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../../service/question.service';
import {QuestionCategory} from '../../../model/questioncategory.model';

import {Question} from '../../../model/question.model';
import {Answertype} from '../../../model/answertypes.model';
import {FormBuilder, FormGroup} from "@angular/forms";
import {first} from "rxjs/operators";
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
answertypes: Answertype[];
  questions: Question[];
  questioncategories: QuestionCategory[];
  form: FormGroup;
  id : string;
  name:string;
  questioncategories_id: string;
  answertypes_id: string;
  selectedstatus: string



  constructor(private formBuilder: FormBuilder,private router: Router,private activatedRoute: ActivatedRoute, private questionService: QuestionService, private route: ActivatedRoute) {this.route.queryParams.subscribe(params => {

    params; })}

  ngOnInit() {
  this.getanswertypes();
  this.getquizcategories();
    this.route.queryParams.subscribe(params => {
        
        this.id = params.id;
        this.name = params.name;
        this.questioncategories_id = params.questioncategories_id;
        this.answertypes_id = params.answertypes_id;
     
   })
  }

    
    editquestionForm(form: FormGroup) {
      
      this.questionService.editquestion(this.id,this.name,this.questioncategories_id,this.answertypes_id).pipe(first())
       .subscribe(question => this.questions.push(question)
      )
      return this.router.navigate(['/admin/question'] );   }


      getanswertypes(){          this.questionService.getanswertypes().pipe(first()).subscribe(answertype => { 
        this.answertypes = answertype} )
      }
      getquizcategories(){  this.questionService.getquizcategories().pipe(first()).subscribe(questioncategory => { 
        this.questioncategories = questioncategory;} )
      }
   

}
