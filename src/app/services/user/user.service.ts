import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { urlRoutes } from '../../../assets/secret'
import { OauthLoginService } from '../login/oauth-login.service';
import { CookieTokenService } from '../cookie/cookie-token.service';
import { throwError, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private cookieTokenService: CookieTokenService
  ) { }

  userData = new Subject();


  // getUserDashboard() {

  //   const token = this.cookieTokenService.getCookie();

  //   return this.http.post(urlRoutes['user'], { token }).pipe(

  //     catchError(this.errHandling) // then handle the error
  //   ).subscribe(res => {

  //     this.userData.next(res)
  //   })
  // }

  getUserDashboard() {

    const token = this.cookieTokenService.getCookie();

    return this.http.post(urlRoutes['user'], { token }).pipe(

      catchError(this.errHandling) // then handle the error
    )
  }

  errHandling(err: HttpErrorResponse) {
    return throwError('error')
  }

}
