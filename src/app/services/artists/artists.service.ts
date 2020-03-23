import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { urlRoutes } from '../../../assets/secret'

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cookieService: CookieService
  ) { }


  getArtist() {
    const token = this.cookieService.get('access-token')
    const id = this.route.children[0].params['_value'].id
    return this.http.post(urlRoutes['artist'], { id, token })
  }

  followArtist(): void {

    const token = this.cookieService.get('access-token')
    const id = this.route.children[0].params['_value'].id
    this.http.post(urlRoutes['follow-artist'], { id, token })

  }

  unfollowArtist(): void {
    const token = this.cookieService.get('access-token')
    const id = this.route.children[0].params['_value'].id
    this.http.post(urlRoutes['unfollow-artist'], { id, token })
  }

  getTopArtists(time?: string) {

    const token = this.cookieService.get('access-token')
    const id = this.route.children[0].params['_value'].id

    time = time !== undefined ? time : 'long_term';
    console.log('time', time)

    return this.http.post(urlRoutes['top-artists'], { id, token, time })
  }
}
