import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {TweetService} from '../tweet.service';
import {User} from '../user';

@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.less']
})
export class CreateTweetComponent implements OnInit {



  public user : User;
  constructor(
      private userService: UserService,
      private tweetService: TweetService

  ) {}

  ngOnInit() {
    this.userService.user.subscribe(user =>{
      this.user = user;
      console.log("user à jour",user);
    });
  }
  addTweet(tweet: string){
    this.tweetService.createTweet(tweet , this.user.name);
  }

}
