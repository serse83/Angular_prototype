import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { UploadComponent } from '../upload/upload.component';
import { QuizComponent } from '../quiz/quiz.component';
import { AdminComponent } from '../admin/admin.component';
import { UserComponent } from '../admin/user/user.component';
import { UpdateUserComponent } from '../admin/update-user/update-user.component';
import { QuestionComponent } from '../admin/question/question.component'
import { UpdateQuestionComponent } from '../admin/question/update-question/update-question.component'
import { UpdateQuizsectionComponent } from '../admin/question/update-quizsection/update-quizsection.component'
import { UpdateAnswerComponent } from '../admin/question/update-answer/update-answer.component'
import { UpdateAnswertypeComponent } from '../admin/question/update-answertype/update-answertype.component'


import { AuthGuard } from '../service/auth.guard';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,     runGuardsAndResolvers: 'always',
},
  { path: 'quiz', component: QuizComponent, canActivate:[AuthGuard], },
  { path: 'admin', component: AdminComponent,canActivate:[AuthGuard], 
  children: [  
  { path: 'user', component: UserComponent ,canActivate:[AuthGuard] },
  { path: 'update-user', component:  UpdateUserComponent,canActivate:[AuthGuard] },
  { path: 'question', component:  QuestionComponent,canActivate:[AuthGuard] },
  { path: 'update-question', component:  UpdateQuestionComponent,canActivate:[AuthGuard] },
  { path: 'update-quizsection', component:  UpdateQuizsectionComponent,canActivate:[AuthGuard] },
  { path: 'update-answer', component: UpdateAnswerComponent ,canActivate:[AuthGuard] },
  { path: 'update-answertype', component: UpdateAnswertypeComponent ,canActivate:[AuthGuard] },
]
  },
  { path: 'upload', component: UploadComponent}

];
/*
{ path: '',   redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent,     runGuardsAndResolvers: 'always',
},
{ path: 'quiz', component: QuizComponent, canActivate:[AuthGuard], },
{ path: 'admin', component: AdminComponent,canActivate:[AuthGuard], 
children: [  
{ path: 'user', component: UserComponent ,canActivate:[AuthGuard],
children: [  
  { path: 'update', component:  UpdateUserComponent,canActivate:[AuthGuard] }]},
{ path: 'question', component:  QuestionComponent,canActivate:[AuthGuard],
children: [ 
{ path: 'update-question', component:  UpdateQuestionComponent,canActivate:[AuthGuard] },
{ path: 'update-quizsection', component:  UpdateQuizsectionComponent,canActivate:[AuthGuard] },
{ path: 'update-answer', component: UpdateAnswerComponent ,canActivate:[AuthGuard] },
{ path: 'update-answertype', component: UpdateAnswertypeComponent ,canActivate:[AuthGuard] }]},
]
},
{ path: 'upload', component: UploadComponent}

];
*/
@NgModule({
  
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
