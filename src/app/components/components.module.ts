import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardModule } from './user-dashboard/dashboard.module';
import { FavoriteTracksComponent } from './favorite-tracks/favorite-tracks.component';
import { RecentComponent } from './recent/recent.component';
import { FavoriteArtistComponent } from './favorite-artist/favorite-artist.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ArtistComponent } from './artist/artist.component';
import { TrackComponent } from './track/track.component';
import { RedirectComponent } from './redirect/redirect.component';
import { PlaylistIdComponent } from './playlist-id/playlist-id.component';
import { UserPlaylistComponent } from './user-playlist/user-playlist.component';





@NgModule({
  declarations: [WelcomeComponent, FavoriteTracksComponent, RecentComponent, FavoriteArtistComponent, PlaylistComponent, ArtistComponent, TrackComponent, RedirectComponent, PlaylistIdComponent, UserPlaylistComponent],
  imports: [
    CommonModule,
    DashboardModule,
  ],
  exports: [WelcomeComponent]
})
export class ComponentsModule { }
