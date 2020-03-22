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
      console.log('res', this.album.tracks.items)

    })
  }


  ngOnDestroy() {
    this.albumSub ? this.albumSub.unsubscribe() : null
  }
}
