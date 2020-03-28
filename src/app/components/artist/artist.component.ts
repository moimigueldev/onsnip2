import { Component, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/services/artists/artists.service';
import { Subscription } from 'rxjs';
import { CookieTokenService } from 'src/app/services/cookie/cookie-token.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artist: any;
  artistSub: Subscription
  isFollowing: boolean;

  serverError: boolean;

  constructor(
    private artistsService: ArtistsService,
  ) { }

  ngOnInit() {
    this.serverError = false


    this.artistSub = this.artistsService.getArtist().subscribe((res) => {

      this.artist = res['artist']
      this.isFollowing = JSON.parse(res['following'])[0]

    }, (error) => {

      console.log("error", error)
      this.serverError = true
      console.log('server error', this.serverError)
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
