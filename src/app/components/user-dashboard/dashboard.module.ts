import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [DashboardComponent, NavbarComponent, ProfileComponent],
  imports: [
    CommonModule
  ],
  // exports: [DashboardComponent]
})
export class DashboardModule { }
