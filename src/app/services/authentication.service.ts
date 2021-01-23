import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private http; 

  constructor() {
    this.http = HttpClient;
   }

   register(){
    
   }

}
