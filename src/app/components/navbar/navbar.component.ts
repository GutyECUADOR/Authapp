import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
  }

  login() {
    this.auth.login();
  }

  logOut() {
    this.auth.logout();
  }

}
