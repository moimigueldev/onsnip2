import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  playlistSub: Subscription;
  playlist: any;

  constructor(
    private playlistService: PlaylistService,
    private router: Router
  ) { }

  ngOnInit() {
    this.playlistSub = this.playlistService.getAllPlaylist().subscribe(res => {
      this.playlist = res['playlist']
      console.log('res', this.playlist)
    })
  }

  goToPlaylist(id: string) {
    console.log('id', id)
    this.router.navigate([`/user-playlist/${id}`])
  }

  ngOnDestroy() {
    this.playlistSub ? this.playlistSub.unsubscribe() : null;
  }

}
