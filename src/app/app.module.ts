import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CodeareaComponent } from './codearea/codearea.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
 import { AceEditorModule } from 'ng2-ace-editor';
import { QuestionComponent } from './question/question.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    CodeareaComponent,
    QuestionComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     AceEditorModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
