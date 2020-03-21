import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Subscription } from 'rxjs';

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
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.profileSubscription = this.userService.getUserDashboard().subscribe(res => {
      this.profile = res['profile']
      this.playlist = res['playlist'].total

    })

  }

  ngOnDestroy() {
    this.profileSubscription ? this.profileSubscription.unsubscribe() : null
  }

}
