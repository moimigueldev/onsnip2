import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CookieTokenService {

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }


  getCookie() {
    return this.doesCookieExist() ? this.cookieService.get('access-token') : this.router.navigate(['/'])

  }

  doesCookieExist() {
    return this.cookieService.check('access-token')
  }

  createCookie() {

  }

}
