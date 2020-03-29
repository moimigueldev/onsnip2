import { Component, OnInit } from '@angular/core';
import { OauthLoginService } from 'src/app/services/login/oauth-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private loginService: OauthLoginService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout()
  }
}
