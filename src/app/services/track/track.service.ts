import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { urlRoutes } from '../../../assets/secret'
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'moment';

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

  getTopTracks(time?: string) {

    const token = this.cookieService.get('access-token')
    const id = this.route.children[0].params['_value'].id

    time = time !== undefined ? time : 'long_term';
    return this.http.post(urlRoutes['top-tracks'], { id, token, time })

  }

  getRecentTracks() {
    const token = this.cookieService.get('access-token')
    return this.http.post(urlRoutes['recent-tracks'], { token })
  }

  convertToMins(arr) {


    let trackArr = arr.items;

    trackArr.forEach(el => {
      const minutes = moment.duration(el.duration_ms)['_data'].minutes
      const seconds = moment.duration(el.duration_ms)['_data'].seconds
      el.duration_ms = `${minutes}:${seconds}`
    });
    arr.items = trackArr
    return arr
  }

  convertRecentTrackstoMins(arr) {


    let trackArr = arr.items;

    trackArr.forEach(el => {
      const minutes = moment.duration(el.track.duration_ms)['_data'].minutes
      const seconds = moment.duration(el.track.duration_ms)['_data'].seconds
      el.track.duration_ms = `${minutes}:${seconds}`
    });
    arr.items = trackArr
    return arr
  }
}
