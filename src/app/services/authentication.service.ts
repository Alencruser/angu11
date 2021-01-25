import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url;
  

  constructor(private http:HttpClient,private router:Router) {
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
    return this.http.post(this.url+'/login',
     data,
     {
       headers:
        {
          'Access-Control-Allow-Origin': '*'
        }
    })
     .subscribe(response=>{
       if(response!=false){
         console.log(response);
         sessionStorage.setItem('username',JSON.stringify(response));
         window.location.reload();
       }
      });
   }

   logout(){
     sessionStorage.removeItem('username');
   }


}
