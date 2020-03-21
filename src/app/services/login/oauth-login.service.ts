import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urlRoutes } from '../../../assets/secret'

@Injectable({
  providedIn: 'root'
})
export class OauthLoginService {

  constructor(
    private http: HttpClient
  ) {

  }

  fetchUser() {
    console.log('fethcing user')
    return this.http.get(urlRoutes['authLogin']).subscribe(res => {
      console.log('response from the server', res)
    })
  }


}
