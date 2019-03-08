import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Tweet} from '../tweet';
import {TweetService} from '../tweet.service';

@Component({
  selector: 'app-tweet-detail',
  templateUrl: './tweet-detail.component.html',
  styleUrls: ['./tweet-detail.component.less']
})
export class TweetDetailComponent implements OnInit {
  tweet:Tweet;

  constructor(
    private route: ActivatedRoute,
    private tweetsService: TweetService
  )
  {}

  ngOnInit() {
    this.getTweet();
  }
  getTweet(){
    const id = parseInt(this.route.snapshot.paramMap.get('id'),10);
    this.tweet = this.tweetsService.getTweetById(id);
  }


}
