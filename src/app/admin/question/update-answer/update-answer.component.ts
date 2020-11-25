import { Component, OnInit } from '@angular/core';
import {AnswerService} from '../../../service/answer.service';
import {Answer} from '../../../model/answers.model';
import {Question} from '../../../model/question.model';
import {QuestionCategory} from '../../../model/questioncategory.model';
import {first} from "rxjs/operators";

import {FormBuilder, FormGroup} from "@angular/forms";
import { Router,ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../service/question.service';


@Component({
  selector: 'app-update-answer',
  templateUrl: './update-answer.component.html',
  styleUrls: ['./update-answer.component.css']
})
export class UpdateAnswerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router,private activatedRoute: ActivatedRoute, private answerService: AnswerService, private questionService: QuestionService, private route: ActivatedRoute) {this.route.queryParams.subscribe(params => {

    params; })}


  answers: Answer[];
  questions: Question[];
  questioncategories: QuestionCategory[];
  form: FormGroup;
  id : string;
  name:string;
  questioncategories_id: string;
questions_id: string;
  isCorrect: boolean;


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        
      this.id = params.id;
      this.name = params.name;
      this.questions_id = params.questions_id;
      this.isCorrect = params.isCorrect;
   
 })
this.getquizcategories()
}

  getquizcategories(){  this.questionService.getquizcategories().pipe(first()).subscribe(questioncategory => { 
    this.questioncategories = questioncategory;} )
  }
}
