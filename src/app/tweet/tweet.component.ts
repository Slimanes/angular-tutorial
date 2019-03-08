import { Component, OnInit, Input } from '@angular/core';
import {Tweet} from '../tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.less']
})
export class TweetComponent implements OnInit {

  @Input()
  tweet: Tweet;
  constructor() { }

  ngOnInit() {
  }
    onLike(like:HTMLInputElement,tweet:Tweet,nbLike:HTMLInputElement){

        //like.style.color='red';
        like.className='fas fa-heart';
        nbLike.style.color='red';
        tweet.compteur=tweet.compteur+1;


    }
    onDislike(dislike:HTMLInputElement,tweet:Tweet,nbLike:HTMLInputElement){

        //like.style.color='red';
        // dislike.className='fas fa-heart';
        nbLike.style.color='black';
        tweet.compteurDislike=tweet.compteurDislike+1;


    }


    onHover(like:HTMLInputElement){
        like.style.cursor='pointer';
    }
}
