import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Subscription } from 'rxjs';
import { CookieTokenService } from 'src/app/services/cookie/cookie-token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: any;
  playlist: number;

  profileSubscription: Subscription;

  constructor(
    private userService: UserService,
    private cookieTokenService: CookieTokenService
  ) { }

  ngOnInit(): void {
    this.profileSubscription = this.userService.getUserDashboard().subscribe(res => {
      if (!this.cookieTokenService.didCookieExpire(res)) {
        this.profile = res['profile']
        this.playlist = res['playlist'].total
      }


    })

  }

  ngOnDestroy() {
    this.profileSubscription ? this.profileSubscription.unsubscribe() : null
  }

}
