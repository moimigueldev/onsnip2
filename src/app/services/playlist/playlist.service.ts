import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { urlRoutes } from '../../../assets/secret'
import { CookieService } from 'ngx-cookie-service';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  id: string;

  testId = "4yP0hdKOZPNshxUOjY0cZj";

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cookieService: CookieService

  ) { }

  ngOnInit() {
    this.id = this.route.children[0].params['_value'].id

  }

  getPlaylist() {
    const token = this.cookieService.get('access-token')
    return this.http.post(urlRoutes['playlistId'], { id: this.testId, token })
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
}
