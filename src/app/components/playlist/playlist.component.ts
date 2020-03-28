import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CookieTokenService } from 'src/app/services/cookie/cookie-token.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  playlistSub: Subscription;
  playlist: any;
  serverError: boolean

  constructor(
    private playlistService: PlaylistService,
    private router: Router,
    private cookieTokenService: CookieTokenService
  ) { }

  ngOnInit() {
    this.serverError = false
    this.playlistSub = this.playlistService.getAllPlaylist().subscribe(res => {

      this.playlist = res['playlist']

    }, (error) => {


      this.serverError = true
      console.log('server error', this.serverError)
    })
  }

  goToPlaylist(id: string) {

    this.router.navigate([`/user-playlist/${id}`])
  }

  ngOnDestroy() {
    this.playlistSub ? this.playlistSub.unsubscribe() : null;
  }

}
