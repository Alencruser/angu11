import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url;
  

  constructor(private http:HttpClient) {
    this.url = 'http://localhost:8080'
   }

   register(data){
     console.log('je recois les données service '+JSON.stringify(data))
     return this.http.post(this.url+'/register',
     data,
     {
       headers:
        {
          'Access-Control-Allow-Origin': '*'
        }
    })
     .subscribe(response=>response);
   }

   login(data){

   }

}
