import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urlRoutes } from '../../../assets/secret'



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private cookieService: CookieService,
    private http: HttpClient
  ) { }


  getUserDashboard() {
    const token = this.cookieService.get('access-token')

    return this.http.post(urlRoutes['user'], { token });
  }
}
