import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { Subscription } from 'rxjs';
import { TrackService } from 'src/app/services/track/track.service';
import { Router } from '@angular/router';
import { CookieTokenService } from 'src/app/services/cookie/cookie-token.service';


@Component({
  selector: 'app-playlist-id',
  templateUrl: './playlist-id.component.html',
  styleUrls: ['./playlist-id.component.scss']
})
export class PlaylistIdComponent implements OnInit {

  albumSub: Subscription;
  album: any;

  constructor(
    private playlistService: PlaylistService,
    private trackService: TrackService,
    private router: Router,
    private cookieTokenService: CookieTokenService
  ) { }

  ngOnInit() {
    this.albumSub = this.playlistService.getPlaylist().subscribe(res => {

      if (!this.cookieTokenService.didCookieExpire(res)) {
        this.album = res;
        this.album = this.playlistService.convertToMins(this.album)
      }



    })
  }

  listenOnSpotifyButton(): void {
    location.href = this.album.external_urls.spotify
  }

  goToTrack(id): void {
    this.router.navigate([`/track/${id}`])
  }


  ngOnDestroy() {
    this.albumSub ? this.albumSub.unsubscribe() : null
  }
}
