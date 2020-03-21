import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { OauthLoginService } from 'src/app/services/login/oauth-login.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class WelcomeComponent implements OnInit {



  constructor(
    private loginService: OauthLoginService
  ) { }

  ngOnInit() {

  }

  loginUser() {
    this.loginService.fetchUser()
  }





}
