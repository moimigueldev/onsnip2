import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashboardComponent } from './components/user-dashboard/dashboard/dashboard.component';
import { FavoriteTracksComponent } from './components/favorite-tracks/favorite-tracks.component';
import { RecentComponent } from './components/recent/recent.component';
import { FavoriteArtistComponent } from './components/favorite-artist/favorite-artist.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { ArtistComponent } from './components/artist/artist.component';
import { TrackComponent } from './components/track/track.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { PlaylistIdComponent } from './components/playlist-id/playlist-id.component';
import { UserPlaylistComponent } from './components/user-playlist/user-playlist.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'favoritetracks', component: FavoriteTracksComponent },
  { path: 'recent', component: RecentComponent },
  { path: 'favoriteartists', component: FavoriteArtistComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'track/:id', component: TrackComponent },
  { path: 'redirect', component: RedirectComponent },
  { path: 'album/:id', component: PlaylistIdComponent },
  { path: 'user-playlist/:id', component: UserPlaylistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
