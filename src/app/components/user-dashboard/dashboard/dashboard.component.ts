import { Component, OnInit } from '@angular/core';
import { OauthLoginService } from 'src/app/services/login/oauth-login.service';
import { UserService } from 'src/app/services/user/user.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userDataLoaded = false
  userSub: Subscription
  serverError: boolean


  constructor(

    private loginService: OauthLoginService,
    private userService: UserService,

  ) { }

  ngOnInit() {
    this.loginService.checkForAccesToken();
    this.serverError = false

    this.userSub = this.userService.getUserDashboard().subscribe(res => {

      this.userDataLoaded = true
      this.userService.userData.next(res)




    }, (error) => {
      console.log('error')
      this.serverError = true;
    })


  }

  ngOnDestroy() {
    this.userSub ? this.userSub.unsubscribe() : null
  }

}
