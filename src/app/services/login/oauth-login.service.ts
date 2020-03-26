import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urlRoutes } from '../../../assets/secret'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../user/user.service';


@Injectable({
  providedIn: 'root'
})
export class OauthLoginService {

  token: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,
    private userService: UserService

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
        this.cookieService.set('access-token', this.token, 3500)
      }
    }

    this.userService.getUserDashboard()
    // this.getUserDashboard();

  }// end of checkForAccesToken

  getUserDashboard() {
    const token = this.cookieService.get('access-token')
    return this.http.post(urlRoutes['user'], { token });

  }

  isCookieAlive() {
    console.log('checking if cookie is alive', this.cookieService.get('access-token'))
  }


}
