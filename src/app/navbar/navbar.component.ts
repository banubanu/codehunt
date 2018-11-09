import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private route: Router) { }

  ngOnInit() {
  }
  act(){
  var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("fi");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
}

gotoCodearea(){
    this.route.navigate(['codearea'])
  }
   gotoQuestion(){
    this.route.navigate(['question'])
  }
   gotoSubmit(){
    this.route.navigate(['submission'])
  }
}
