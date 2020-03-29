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
  serverError: boolean;
  profileSubscription: Subscription;
  userImage: string

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.serverError = false

    this.profileSubscription = this.userService.userData.subscribe(res => {
      this.profile = res['profile']
      this.playlist = res['playlist'].total
      this.checkForUserImage();
    })

  }

  checkForUserImage() {
    this.userImage = this.profile.images.length ? this.profile.images[0].url : 'https://spinninrecords.com/images/img_profile.png'

  }


  ngOnDestroy(): void {
    this.profileSubscription ? this.profileSubscription.unsubscribe() : null
  }

}
