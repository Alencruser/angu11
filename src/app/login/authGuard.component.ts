import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-authGuard'
})
export class authGuardComponent implements OnInit {

    constructor(private auth:AuthenticationService) {
        
       }

    ngOnInit(){
        return this.auth.isConnected();
    }
}