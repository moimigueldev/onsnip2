import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileRecommendationsComponent } from './profile-recommendations/profile-recommendations.component';



@NgModule({
  declarations: [DashboardComponent, NavbarComponent, ProfileComponent, ProfileRecommendationsComponent],
  imports: [
    CommonModule
  ],
  // exports: [DashboardComponent]
})
export class DashboardModule { }
