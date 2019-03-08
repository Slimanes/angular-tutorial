import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TimeAgoPipe} from 'time-ago-pipe';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { TimelineComponent } from './timeline/timeline.component';
import { UserBoxComponent } from './user-box/user-box.component';
import { UserComponent } from './user/user.component';
import { TweetDetailComponent } from './tweet-detail/tweet-detail.component';
import { TweetComponent } from './tweet/tweet.component';
import { CreateTweetComponent } from './create-tweet/create-tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    TimelineComponent,
    TimeAgoPipe,
    UserBoxComponent,
    UserComponent,
    TweetDetailComponent,
    TweetComponent,
    CreateTweetComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
