import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CookieTokenService } from 'src/app/services/cookie/cookie-token.service';

@Component({
  selector: 'app-user-playlist',
  templateUrl: './user-playlist.component.html',
  styleUrls: ['./user-playlist.component.scss']
})
export class UserPlaylistComponent implements OnInit {

  playlist: any;
  playlistSub: Subscription;

  constructor(
    private playlistService: PlaylistService,
    private router: Router,
    private cookieTokenService: CookieTokenService
  ) { }

  ngOnInit() {
    this.playlistSub = this.playlistService.getUserPlaylist().subscribe(res => {

      if (!this.cookieTokenService.didCookieExpire(res)) {
        this.playlist = this.playlistService.convertUserPlaylistToMins(res['playlist'])
      }



    })
  }

  listenOnSpotifyButton(url: string) {
    location.href = url;
  }

  goToTrack(id: string) {
    this.router.navigate([`/track/${id}`])
  }

  ngOnDestroy() {
    this.playlistSub ? this.playlistSub.unsubscribe() : null
  }

}
