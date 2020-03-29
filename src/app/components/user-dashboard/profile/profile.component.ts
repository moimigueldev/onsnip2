import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Subscription } from 'rxjs';
import { OauthLoginService } from 'src/app/services/login/oauth-login.service';


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
  userImage: string = 'https://spinninrecords.com/images/img_profile.png';

  constructor(
    private userService: UserService,
    private loginService: OauthLoginService
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

  logout() {
    this.loginService.logout()
  }

}
