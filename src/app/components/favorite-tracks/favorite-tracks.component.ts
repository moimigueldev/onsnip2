import { Component, OnInit } from '@angular/core';
import { TrackService } from 'src/app/services/track/track.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';

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

  tracksList: any;
  longTermSub: Subscription;
  mediumTermSub: Subscription;
  shortTermSub: Subscription;
  initialSub: Subscription;

  constructor(
    private tracksService: TrackService,
    private router: Router,
    private playlistService: PlaylistService
  ) { }

  ngOnInit() {
    this.initialSub = this.tracksService.getTopTracks().subscribe(res => {
      this.tracksList = res['tracks']
      this.tracksList = this.tracksService.convertToMins(this.tracksList)
    })
  }

  getAllTime(): void {
    this.activeClass.allTime = true;
    this.activeClass.sixMonths = false;
    this.activeClass.threeWeeks = false;
    this.longTermSub = this.tracksService.getTopTracks().subscribe(res => {
      this.tracksList = res['tracks']
      this.tracksList = this.tracksService.convertToMins(this.tracksList)

    })
  }

  getSixMonths(): void {
    this.activeClass.allTime = false;
    this.activeClass.sixMonths = true;
    this.activeClass.threeWeeks = false;
    this.mediumTermSub = this.tracksService.getTopTracks('medium_term').subscribe(res => {
      this.tracksList = res['tracks']
      this.tracksList = this.tracksService.convertToMins(this.tracksList)

    })

  }
  getThreeWeeks(): void {
    this.activeClass.allTime = false;
    this.activeClass.sixMonths = false;
    this.activeClass.threeWeeks = true;
    this.shortTermSub = this.tracksService.getTopTracks('short_term').subscribe(res => {
      this.tracksList = res['tracks']
      this.tracksList = this.tracksService.convertToMins(this.tracksList)

    })
  }

  goToTrack(id: string) {
    this.router.navigate([`/track/${id}`])
  }

  ngOnDestroy() {
    this.initialSub ? this.initialSub.unsubscribe() : null;
    this.longTermSub ? this.longTermSub.unsubscribe() : null;
    this.mediumTermSub ? this.mediumTermSub.unsubscribe() : null;
    this.shortTermSub ? this.shortTermSub.unsubscribe() : null;
  }

}
