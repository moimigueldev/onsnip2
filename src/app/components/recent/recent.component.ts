import { Component, OnInit } from '@angular/core';
import { TrackService } from 'src/app/services/track/track.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {

  tracksSub: Subscription;
  tracks: any

  constructor(
    private tracksService: TrackService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tracksSub = this.tracksService.getRecentTracks().subscribe(res => {
      this.tracks = this.tracksService.convertRecentTrackstoMins(res['tracks'])
      console.log('res', this.tracks)
    })
  }

  goToTrack(id: string) {
    this.router.navigate([`/track/${id}`])
  }

  ngOnDestroy() {
    this.tracksSub ? this.tracksSub.unsubscribe() : null
  }
}
