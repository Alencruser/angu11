import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  

  constructor(private http:HttpClientModule) {
   }

   register(data):void{
     console.log('je recois les données service '+JSON.stringify(data))
   }

   login(data){

   }

}
