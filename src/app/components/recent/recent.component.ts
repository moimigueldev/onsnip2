import { Component, OnInit } from '@angular/core';
import { TrackService } from 'src/app/services/track/track.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CookieTokenService } from 'src/app/services/cookie/cookie-token.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {

  tracksSub: Subscription;
  tracks: any

  constructor(
    private tracksService: TrackService,
    private router: Router,
    private cookieTokenService: CookieTokenService
  ) { }

  ngOnInit() {
    this.tracksSub = this.tracksService.getRecentTracks().subscribe(res => {
      if (!this.cookieTokenService.didCookieExpire(res)) {
        this.tracks = this.tracksService.convertRecentTrackstoMins(res['tracks'])
      }

    })
  }

  goToTrack(id: string) {
    this.router.navigate([`/track/${id}`])
  }

  ngOnDestroy() {
    this.tracksSub ? this.tracksSub.unsubscribe() : null
  }
}
