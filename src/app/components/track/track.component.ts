import { Component, OnInit } from '@angular/core';
import { TrackService } from 'src/app/services/track/track.service';
import { Subscription } from 'rxjs';
import * as moment from 'moment'
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  track: any;
  trackFeatures: any
  trackSub: Subscription;
  constructor(
    private trackService: TrackService
  ) { }

  ngOnInit() {
    this.trackSub = this.trackService.getTrack().subscribe(res => {
      this.track = res['track']
      this.trackFeatures = res['trackFeatures']

      this.modFeatures()



    })
  }

  modFeatures(): void {
    const min = moment.duration(this.trackFeatures.duration_ms)['_data'].minutes
    const sec = moment.duration(this.trackFeatures.duration_ms)['_data'].seconds
    this.trackFeatures.duration_ms = `${min}:${sec}`
    this.trackFeatures.tempo = Math.round(this.trackFeatures.tempo)
  }

  goToSpotify(url: string) {
    location.href = url
  }

  ngOnDestroy() {
    this.trackSub ? this.trackSub.unsubscribe() : null;
  }

}
