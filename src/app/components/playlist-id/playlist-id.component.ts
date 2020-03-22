import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-playlist-id',
  templateUrl: './playlist-id.component.html',
  styleUrls: ['./playlist-id.component.scss']
})
export class PlaylistIdComponent implements OnInit {

  albumSub: Subscription;
  album: any;

  constructor(
    private playlistService: PlaylistService
  ) { }

  ngOnInit() {
    this.albumSub = this.playlistService.getPlaylist().subscribe(res => {
      this.album = res;
      this.album = this.playlistService.convertToMins(this.album)
      console.log('album', this.album)
    })
  }

  listenOnSpotifyButton(): void {
    console.log('clicked', this.album.external_urls.spotify)
    // "location.href = 'www.yoursite.com'
    location.href = this.album.external_urls.spotify
  }


  ngOnDestroy() {
    this.albumSub ? this.albumSub.unsubscribe() : null
  }
}
