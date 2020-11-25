import { Component, OnInit } from '@angular/core';
import {AnswerService} from '../../../service/answer.service';
import {Answer} from '../../../model/answers.model';
import {Question} from '../../../model/question.model';
import {Answertype} from '../../../model/answertypes.model';
import {first} from "rxjs/operators";

import {FormBuilder, FormGroup} from "@angular/forms";
import { Router,ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../service/question.service';

@Component({
  selector: 'app-update-answertype',
  templateUrl: './update-answertype.component.html',
  styleUrls: ['./update-answertype.component.css']
})
export class UpdateAnswertypeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router,private activatedRoute: ActivatedRoute, private answerService: AnswerService, private questionService: QuestionService, private route: ActivatedRoute) {this.route.queryParams.subscribe(params => {

    params; })}
    answertypes:Answertype[];
    answers: Answer[];
    questions: Question[];
    form: FormGroup;
    id : string;
    name:string;
    code: string;
  
  
    ngOnInit() {
      this.route.queryParams.subscribe(params => {
          
        this.id = params.id;
        this.name = params.name;
        this.code = params.code;
     
   })
  }

  editanswertypeForm(form: FormGroup) {
      
    this.answerService.editanswertype(this.id,this.name, this.code).pipe(first())
     .subscribe(answertype => this.answertypes.push(answertype)
    )
    return this.router.navigate(['/admin/question'] );   }

}

  
  
  