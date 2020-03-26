import { Component, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/services/artists/artists.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CookieTokenService } from 'src/app/services/cookie/cookie-token.service';

@Component({
  selector: 'app-favorite-artist',
  templateUrl: './favorite-artist.component.html',
  styleUrls: ['./favorite-artist.component.scss']
})
export class FavoriteArtistComponent implements OnInit {

  activeClass = {
    allTime: true,
    sixMonths: false,
    threeWeeks: false
  }

  artists: any;
  longTermSub: Subscription;
  shortTermSub: Subscription;
  initialSub: Subscription;
  mediumTermSub: Subscription;

  constructor(
    private artistService: ArtistsService,
    private router: Router,
    private cookieTokenService: CookieTokenService
  ) { }

  ngOnInit() {
    this.initialSub = this.artistService.getTopArtists().subscribe(res => {

      if (!this.cookieTokenService.didCookieExpire(res)) {
        this.artists = res
      }


    })
  }

  getAllTime(): void {
    this.artists = null
    this.activeClass.allTime = true;
    this.activeClass.sixMonths = false;
    this.activeClass.threeWeeks = false;
    this.longTermSub = this.artistService.getTopArtists('long_term').subscribe(res => {
      this.artists = res
    })
  }

  getSixMonths(): void {
    this.artists = null
    this.activeClass.allTime = false;
    this.activeClass.sixMonths = true;
    this.activeClass.threeWeeks = false;
    this.mediumTermSub = this.artistService.getTopArtists('medium_term').subscribe(res => {
      this.artists = res
    })

  }
  getThreeWeeks(): void {
    this.artists = null
    this.activeClass.allTime = false;
    this.activeClass.sixMonths = false;
    this.activeClass.threeWeeks = true;
    this.shortTermSub = this.artistService.getTopArtists('short_term').subscribe(res => {

      this.artists = res
    })

  }

  goToArtist(id: string): void {
    this.router.navigate([`/artist/${id}`])
  }

  ngOnDestroy() {
    this.initialSub ? this.initialSub.unsubscribe() : null;
    this.longTermSub ? this.longTermSub.unsubscribe() : null;
    this.mediumTermSub ? this.mediumTermSub.unsubscribe() : null;
    this.shortTermSub ? this.shortTermSub.unsubscribe() : null;
  }

}
