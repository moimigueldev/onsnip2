import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { urlRoutes } from '../../../assets/secret'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../user/user.service';
import { CookieTokenService } from '../cookie/cookie-token.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OauthLoginService {

  token: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,
    private userService: UserService,
    private cookieTokenService: CookieTokenService

  ) {

  }

  fetchUser() {
    return this.http.get(urlRoutes['authLogin']).subscribe(res => {
      res['url'] ? window.location.href = res['url'] : console.log('error fetching user', res)
    })
  }

  checkForAccesToken(): void {
    let hashString = window.location.hash.toString()

    if (hashString.length) {
      const start = hashString.indexOf('=') + 1;
      const end = hashString.indexOf('&');

      this.token = hashString.slice(start, end)

      if (this.token.length) {
        this.cookieTokenService.createCookie(this.token)
      }
    }

    this.userService.getUserDashboard();
    // this.getUserDashboard();

  }// end of checkForAccesToken

  getUserDashboard() {
    // console.log('getting dashboard')
    const token = this.cookieService.get('access-token')
    return this.http.post(urlRoutes['user'], { token });

  }

  logout() {

    this.cookieTokenService.deleteCookie()
  }



}
