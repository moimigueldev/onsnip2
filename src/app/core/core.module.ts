import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NavbarComponent } from './nav/navbar/navbar.component';
import { ComponentsModule } from '../components/components.module';
import { DashboardModule } from '../components/user-dashboard/dashboard.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    // DashboardModule
  ],
  exports: []
})
export class CoreModule { }
