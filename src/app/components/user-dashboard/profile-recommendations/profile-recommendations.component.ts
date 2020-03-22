import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-recommendations',
  templateUrl: './profile-recommendations.component.html',
  styleUrls: ['./profile-recommendations.component.scss']
})
export class ProfileRecommendationsComponent implements OnInit {

  newReleasesSubscription: Subscription;
  newReleases: any;
  featuredPlaylist: any;


  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newReleasesSubscription = this.userService.getUserDashboard().subscribe(res => {
      this.newReleases = res['newReleases'].albums
      this.featuredPlaylist = res['featuredPlaylist']
      console.log('pl', this.newReleases)
    })
  }

  goToAlbum(id) {
    console.log('clicked', id)
    this.router.navigate([`/album/${id}`])
  }


  ngOnDestroy() {
    this.newReleasesSubscription ? this.newReleasesSubscription.unsubscribe() : null
  }
}
