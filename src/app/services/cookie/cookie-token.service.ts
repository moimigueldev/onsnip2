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

  doesCookieExist(): boolean {
    return this.cookieService.check('access-token')
  }

  createCookie(token: string): void {
    this.cookieService.set('access-token', token, 3500)
  }

  didCookieExpire(res: any) {
    if (res['err'] !== undefined) {
      console.log('cookie expired')
      this.router.navigate(['/'])
      return true
    }

    return false
  }

}
