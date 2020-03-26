import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urlRoutes } from '../../../assets/secret'
import { OauthLoginService } from '../login/oauth-login.service';
import { CookieTokenService } from '../cookie/cookie-token.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
    private cookieTokenService: CookieTokenService
  ) { }


  getUserDashboard() {


    // const otherToken = this.cookieTokenService.getCookie();
    const token = this.cookieTokenService.getCookie();

    return this.http.post(urlRoutes['user'], { token });
  }
}
