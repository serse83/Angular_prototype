import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './login/jwt.iterceptor';
import { ErrorInterceptor  } from './login/error.interceptor';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
import { UploadComponent } from './upload/upload.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './router/app-routing.module';
import { QuizComponent } from './quiz/quiz.component';
import { AdminComponent } from './admin/admin.component';
import { UserService } from './service/user.service';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { UserComponent } from './admin/user/user.component';
import { QuestionComponent } from './admin/question/question.component';
import { QuestionService } from './service/question.service';
import { AnswerService } from './service/answer.service';
import { UpdateQuestionComponent } from './admin/question/update-question/update-question.component';
import { UpdateQuizsectionComponent } from './admin/question/update-quizsection/update-quizsection.component';
import { UpdateQuizcategoriesComponent } from './admin/question/update-quizcategories/update-quizcategories.component';
import { UpdateQuizComponent } from './admin/question/update-quiz/update-quiz.component';
import { UpdateAnswerComponent } from './admin/question/update-answer/update-answer.component';
import { UpdateAnswertypeComponent } from './admin/question/update-answertype/update-answertype.component';
import { FilterPipe} from './filter/filter.pipe';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule, HttpClientModule, AppRoutingModule],
  declarations: [ AppComponent, LoginComponent, UploadComponent, NavComponent, QuizComponent, AdminComponent, UpdateUserComponent, UserComponent, QuestionComponent, UpdateQuestionComponent, UpdateQuizsectionComponent, UpdateQuizcategoriesComponent, UpdateQuizComponent, UpdateAnswerComponent, UpdateAnswertypeComponent, FilterPipe, FooterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService, HttpClient, UserService, QuestionService, AnswerService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
})
export class AppModule { }
