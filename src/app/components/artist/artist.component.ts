import { Component, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/services/artists/artists.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artist: any;
  artistSub: Subscription
  isFollowing: boolean;

  constructor(
    private artistsService: ArtistsService
  ) { }

  ngOnInit() {
    this.artistSub = this.artistsService.getArtist().subscribe(res => {
      this.artist = res['artist']
      this.isFollowing = JSON.parse(res['following'])[0]
      console.log("following", this.artist)
    })
  }

  followArtist() {
    this.artistsService.followArtist()
    this.isFollowing = !this.isFollowing
  }

  unfollowArtist() {
    this.artistsService.unfollowArtist()
    this.isFollowing = !this.isFollowing

  }

  ngOnDestroy() {
    this.artistSub ? this.artistSub.unsubscribe() : null
  }
}
