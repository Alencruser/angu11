import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  template:''
})
export class AuthGuardComponent implements OnInit {

    constructor(private auth:AuthenticationService) {
        
       }

    ngOnInit(){
        return this.auth.isConnected();
    }
}