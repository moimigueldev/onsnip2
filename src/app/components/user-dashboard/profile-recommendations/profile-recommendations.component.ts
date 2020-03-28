import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CookieTokenService } from 'src/app/services/cookie/cookie-token.service';

@Component({
  selector: 'app-profile-recommendations',
  templateUrl: './profile-recommendations.component.html',
  styleUrls: ['./profile-recommendations.component.scss']
})
export class ProfileRecommendationsComponent implements OnInit {

  newReleasesSubscription: Subscription;
  newReleases: any;
  featuredPlaylist: any;
  topArtists: any;
  serverError: boolean

  constructor(
    private userService: UserService,
    private router: Router,
    private cookieTokenService: CookieTokenService
  ) { }

  ngOnInit() {
    this.serverError = false
    this.newReleasesSubscription = this.userService.getUserDashboard().subscribe(res => {


      this.newReleases = res['newReleases'].albums
      this.featuredPlaylist = res['featuredPlaylist']
      this.topArtists = res['topArtists']

      // if (!this.cookieTokenService.didCookieExpire(res)) {
      //   this.newReleases = res['newReleases'].albums
      //   this.featuredPlaylist = res['featuredPlaylist']
      //   this.topArtists = res['topArtists']
      // }



    }, (error) => {


      this.serverError = true
      console.log('server error', this.serverError)
    })
  }

  goToAlbum(id) {
    this.router.navigate([`/album/${id}`])
  }

  goToArtist(id) {
    this.router.navigate([`/artist/${id}`])

  }

  viewAllArtist() {
    this.router.navigate([`/favoriteartists`])

  }




  ngOnDestroy() {
    this.newReleasesSubscription ? this.newReleasesSubscription.unsubscribe() : null
  }
}
