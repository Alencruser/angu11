import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public breadcrumb;
  public username;
  public pass;

  constructor(private route:ActivatedRoute,private auth:AuthenticationService) {
    this.breadcrumb = this.route.snapshot.data['breadcrumb'];
    this.username = "";
    this.pass = "";
   }

  ngOnInit(): void {
  }

  register(){
    if(this.username.length>2 && this.pass.length>7){
      // Appel service register
      this.auth.register({
        username:this.username,
        password:this.pass
      })
    }
  }

  login(){
    if(this.username.length>2 && this.pass.length>7){
      // Appel service register
      this.auth.login({
        username:this.username,
        password:this.pass
      })
    }
  }

}
