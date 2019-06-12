import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {LoginService} from './login.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TweetComponent } from './tweet/tweet.component';
import {RouterModule} from '@angular/router';
import {AppRouting} from './app.routing';
import { TweetsDetailsComponent } from './tweets-details/tweets-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TweetComponent,
    TweetsDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRouting
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
