import { Component, OnInit } from '@angular/core';
import { OauthLoginService } from 'src/app/services/login/oauth-login.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboard: any;


  constructor(

    private loginService: OauthLoginService
  ) { }

  ngOnInit() {
    this.loginService.checkForAccesToken();

  }


}
