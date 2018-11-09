import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  loginForm: FormGroup;
  validateError = '';

  constructor(private route: Router, private userService: UserService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
  }

  get email() { return this.loginForm.get("email"); }

  get password() { return this.loginForm.get("password"); }

  onSubmit() {
    this.userService.name=this.email.value;
    this.userService.doLogin(this.email.value,this.password.value).subscribe(
      data=>{
        if(data['result']=='Pass'){
          this.route.navigate(['admin']);
        }
        else{
          this.validateError="Please provide correct credentials";
        }
      }
    )
    
  }

  goToSignUp(){
    this.route.navigate(['signup'])
  }

}
