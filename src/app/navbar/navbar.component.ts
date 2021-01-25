import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public connected;

  constructor(private auth:AuthenticationService,private router : Router){
    console.log(sessionStorage.getItem('username'))
    this.connected = typeof sessionStorage.getItem('username') != 'object';
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
  }


  logout(){
    this.auth.logout();
    window.location.reload()
  }

}
