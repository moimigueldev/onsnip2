import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-tracks',
  templateUrl: './favorite-tracks.component.html',
  styleUrls: ['./favorite-tracks.component.scss']
})
export class FavoriteTracksComponent implements OnInit {

  activeClass = {
    allTime: true,
    sixMonths: false,
    threeWeeks: false
  }

  constructor() { }

  ngOnInit() {
  }

  getAllTime(): void {
    this.activeClass.allTime = true;
    this.activeClass.sixMonths = false;
    this.activeClass.threeWeeks = false;
    // this.longTermSub = this.artistService.getTopArtists('long_term').subscribe(res => {
    //   this.artists = res
    // })
  }

  getSixMonths(): void {
    this.activeClass.allTime = false;
    this.activeClass.sixMonths = true;
    this.activeClass.threeWeeks = false;
    // this.mediumTermSub = this.artistService.getTopArtists('medium_term').subscribe(res => {
    //   this.artists = res
    // })

  }
  getThreeWeeks(): void {
    this.activeClass.allTime = false;
    this.activeClass.sixMonths = false;
    this.activeClass.threeWeeks = true;
    // this.shortTermSub = this.artistService.getTopArtists('short_term').subscribe(res => {

    //   this.artists = res
    // })

  }

}
