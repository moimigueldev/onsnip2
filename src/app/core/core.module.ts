import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [NavbarComponent]
})
export class CoreModule { }
