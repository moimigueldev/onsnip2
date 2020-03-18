import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashboardComponent } from './components/user-dashboard/dashboard/dashboard.component';
import { FavoriteTracksComponent } from './components/favorite-tracks/favorite-tracks.component';
import { RecentComponent } from './components/recent/recent.component';
import { FavoriteArtistComponent } from './components/favorite-artist/favorite-artist.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'favoritetracks', component: FavoriteTracksComponent },
  { path: 'recent', component: RecentComponent },
  { path: 'favoriteartist', component: FavoriteArtistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
