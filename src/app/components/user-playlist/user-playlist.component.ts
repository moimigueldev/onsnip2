import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit() {
    this.playlistSub = this.playlistService.getUserPlaylist().subscribe(res => {

      this.playlist = this.playlistService.convertUserPlaylistToMins(res['playlist'])
      console.log('pal', this.playlist)
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
