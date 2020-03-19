import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardModule } from './user-dashboard/dashboard.module';
import { FavoriteTracksComponent } from './favorite-tracks/favorite-tracks.component';
import { RecentComponent } from './recent/recent.component';
import { FavoriteArtistComponent } from './favorite-artist/favorite-artist.component';
import { PlaylistComponent } from './playlist/playlist.component';




@NgModule({
  declarations: [WelcomeComponent, FavoriteTracksComponent, RecentComponent, FavoriteArtistComponent, PlaylistComponent],
  imports: [
    CommonModule,
    DashboardModule,
  ],
  exports: [WelcomeComponent]
})
export class ComponentsModule { }
