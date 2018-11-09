import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { LoginpageComponent } from "src/app/loginpage/loginpage.component";
import { CodeareaComponent } from "src/app/codearea/codearea.component";
import { QuestionComponent } from "src/app/question/question.component";

const routes: Routes = [
  // { path: 'login', component: LoginpageComponent },
  { path: 'codearea', component: CodeareaComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'submission', component: CodeareaComponent },
  { path: 'home', component: CodeareaComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
