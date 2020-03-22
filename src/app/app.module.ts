import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { OauthLoginService } from './services/login/oauth-login.service';
import { UserService } from './services/user/user.service';
import { PlaylistService } from './services/playlist/playlist.service';
import { ArtistsService } from './services/artists/artists.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // RouterModule
  ],
  providers: [CookieService, OauthLoginService, UserService, PlaylistService, ArtistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
