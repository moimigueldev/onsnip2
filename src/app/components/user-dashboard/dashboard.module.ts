import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileRecommendationsComponent } from './profile-recommendations/profile-recommendations.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DashboardComponent, NavbarComponent, ProfileComponent, ProfileRecommendationsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DashboardComponent, NavbarComponent, RouterModule]
})
export class DashboardModule { }
