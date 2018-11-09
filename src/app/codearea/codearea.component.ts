import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { UserService } from './../user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-codearea',
  templateUrl: './codearea.component.html',
  styleUrls: ['./codearea.component.css']
})
export class CodeareaComponent implements OnInit {
private codearea;
  private resultset:any;
  private output:string; 
  private fileText;
  program:any;

  text:string="";
  options:any = {maxLines: 1000, printMargin: false};
    
  constructor(private route: Router, private ServiceService:UserService) { }
  ngOnInit() {
  }
  


  onChange(code) {
       
        console.log("new code", code);
    }
  fileUpload(event) {
    var reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);
    var me = this;
    reader.onload = function () {
      me.codearea= reader.result;
    }
   
  }
  sendcode()
  {
      if(this.codearea == null || this.codearea=="")
      {
        alert("Please type your code in the text box or choose file");
      }
      else
      this.ServiceService.sendcode1(this.codearea).subscribe(
      data => {
        this.resultset=data;
        console.log(this.resultset);
        
          });
  }

  
}

