import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { urlRoutes } from '../../../assets/secret'
import { CookieService } from 'ngx-cookie-service';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import * as moment from 'moment';
import { CookieTokenService } from '../cookie/cookie-token.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  id: string;



  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cookieTokenService: CookieTokenService
  ) { }

  ngOnInit() {

  }

  getPlaylist() {
    const token = this.cookieTokenService.getCookie()
    this.id = this.route.children[0].params['_value'].id
    return this.http.post(urlRoutes['playlistId'], { id: this.id, token }).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.errHandling) // then handle the error
    )
  }

  convertToMins(arr) {
    let trackArr = arr.tracks.items;

    trackArr.forEach(el => {
      const minutes = moment.duration(el.duration_ms)['_data'].minutes
      const seconds = moment.duration(el.duration_ms)['_data'].seconds
      el.duration_ms = `${minutes}:${seconds}`
    });
    arr.tracks.items = trackArr
    return arr

  }

  convertUserPlaylistToMins(arr) {

    let trackArr = arr.tracks.items;


    trackArr.forEach(el => {
      const minutes = moment.duration(el.track.duration_ms)['_data'].minutes
      const seconds = moment.duration(el.track.duration_ms)['_data'].seconds
      el.track.duration_ms = `${minutes}:${seconds}`
    });
    arr.tracks.items = trackArr

    return arr

  }

  getAllPlaylist() {
    const token = this.cookieTokenService.getCookie()

    return this.http.post(urlRoutes['all-playlist'], { token }).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.errHandling) // then handle the error
    )
  }

  getUserPlaylist() {
    const token = this.cookieTokenService.getCookie()
    this.id = this.route.children[0].params['_value'].id
    return this.http.post(urlRoutes['user-playlist'], { id: this.id, token }).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.errHandling) // then handle the error
    )


  }

  errHandling(err: HttpErrorResponse) {
    return throwError('error')
  }

}
