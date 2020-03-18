import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './user-dashboard/dashboard/dashboard.component';
import { CoreModule } from '../core/core.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardModule } from './user-dashboard/dashboard.module';
import { ProfileComponent } from './user-dashboard/profile/profile.component';
import { FavoriteTracksComponent } from './favorite-tracks/favorite-tracks.component';
import { RecentComponent } from './recent/recent.component';



@NgModule({
  declarations: [WelcomeComponent, FavoriteTracksComponent, RecentComponent],
  imports: [
    CommonModule,
    DashboardModule
  ],
  exports: [WelcomeComponent]
})
export class ComponentsModule { }
