import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
name:string;
topic:string;
  endpoint = "http://localhost:8089/hello";

 constructor(private http: HttpClient) { }
  doLogin(email: any, password: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(this.endpoint + "survey/" + email + "/" + password, httpOptions);
  }

   sendcode1(codearea)
   {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let dataval = {'codearea':codearea}
    return this.http.post(this.endpoint,dataval, httpOptions)
   }

  
}



  

