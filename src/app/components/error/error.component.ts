import { Component, OnInit } from '@angular/core';
import { OauthLoginService } from 'src/app/services/login/oauth-login.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(
    private LoginService: OauthLoginService
  ) { }

  ngOnInit() {
  }


  onTryAgain() {
    console.log('click')
    this.LoginService.fetchUser()
  }
}
