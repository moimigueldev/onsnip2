import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from '../core/core.module';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [WelcomeComponent, DashboardComponent, NavbarComponent],
  imports: [
    CommonModule,
  ],
  exports: [WelcomeComponent]
})
export class ComponentsModule { }
