import { Component, OnInit } from '@angular/core';
import { OauthLoginService } from 'src/app/services/login/oauth-login.service';
import { UserService } from 'src/app/services/user/user.service';
import { Subscription } from 'rxjs';
import { CookieTokenService } from 'src/app/services/cookie/cookie-token.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboard: any;
  profile: any;
  userSub: Subscription



  constructor(

    private loginService: OauthLoginService,
    private userService: UserService,
    private cookieTokenService: CookieTokenService
  ) { }

  ngOnInit() {
    this.loginService.checkForAccesToken();


    this.userSub = this.userService.getUserDashboard().subscribe(res => {

      if (!this.cookieTokenService.didCookieExpire(res)) {
        this.profile = true
      }


    })


  }

  ngOnDestroy() {
    this.userSub ? this.userSub.unsubscribe() : null
  }

}
