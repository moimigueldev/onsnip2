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

  constructor(
    private artistsService: ArtistsService,
    private cookieTokenService: CookieTokenService
  ) { }

  ngOnInit() {
    this.artistSub = this.artistsService.getArtist().subscribe((res) => {

      if (!this.cookieTokenService.didCookieExpire(res)) {
        this.artist = res['artist']
        this.isFollowing = JSON.parse(res['following'])[0]
      }

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
