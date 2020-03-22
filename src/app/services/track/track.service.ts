import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { urlRoutes } from '../../../assets/secret'
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  getTrack() {

    const token = this.cookieService.get('access-token')
    const id = this.route.children[0].params['_value'].id
    return this.http.post(urlRoutes['tracks'], { id, token })
  }
}
