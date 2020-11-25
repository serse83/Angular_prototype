import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../../service/question.service';
import {Quizsection} from '../../../model/quizsection.model';
import {FormBuilder, FormGroup} from "@angular/forms";
import {first} from "rxjs/operators";
import { Router,ActivatedRoute } from '@angular/router';

  @Component({
  selector: 'app-update-quizsection',
  templateUrl: './update-quizsection.component.html',
  styleUrls: ['./update-quizsection.component.css']
})
export class UpdateQuizsectionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router,private activatedRoute: ActivatedRoute, private questionService: QuestionService, private route: ActivatedRoute) {this.route.queryParams.subscribe(params => {

    params; })}

    quizsections: Quizsection[];
    id : string;
    name:string;
  
  ngOnInit() {

    this.route.queryParams.subscribe(params => {
        
      this.id = params.id;
      this.name = params.name;
   
 })

  }


    
    editquizsectionForm(form: FormGroup) {
      
      this.questionService.editquizsection(this.id,this.name).pipe(first())
       .subscribe(quizsection => this.quizsections.push(quizsection)
      )
      
      return this.router.navigate(['/admin/question'] );   }

}
