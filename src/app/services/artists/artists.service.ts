import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { urlRoutes } from '../../../assets/secret'
import { CookieTokenService } from '../cookie/cookie-token.service';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cookieTokenService: CookieTokenService
  ) { }


  getArtist() {
    const token = this.cookieTokenService.getCookie()
    const id = this.route.children[0].params['_value'].id

    return this.http.post(urlRoutes['artist'], { id, token }).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.errHandling) // then handle the error
    )
  }

  errHandling(err: HttpErrorResponse) {
    return throwError('error')
  }

  followArtist(): void {
    const token = this.cookieTokenService.getCookie()
    const id = this.route.children[0].params['_value'].id
    this.http.post(urlRoutes['follow-artist'], { id, token })

  }

  unfollowArtist(): void {
    const token = this.cookieTokenService.getCookie()
    const id = this.route.children[0].params['_value'].id
    this.http.post(urlRoutes['unfollow-artist'], { id, token })
  }

  getTopArtists(time?: string) {

    const token = this.cookieTokenService.getCookie()
    const id = this.route.children[0].params['_value'].id

    time = time !== undefined ? time : 'long_term';

    return this.http.post(urlRoutes['top-artists'], { id, token, time }).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.errHandling) // then handle the error
    )
  }
}
