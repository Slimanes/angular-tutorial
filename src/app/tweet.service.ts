import { Injectable } from '@angular/core';
import {Tweet} from './tweet';



@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor() { }

    tweets: Tweet[] = [
        {
            created_at: 'Wed Apr 05 12:30:12 +0000 2017',
            id: 1,
            text: 'Je mets les pieds où je veux, Little John… et c\'est souvent dans la gueule.',
            user: 'James Braddock',
            compteur:0,
            compteurDislike:0
        },
        {
            created_at: 'Thu Apr 06 15:24:15 +0000 2017',
            id: 2,
            text: 'Qui a deux pouces et qui s\'en fout ? Bob Kelso !',
            user: 'Bob kelso',
            compteur:0,
            compteurDislike:0
        },
    ];

    getTweets(){
        return this.tweets;
    }
    getTweetById(id:number){
        return this.tweets.find(tweet => tweet.id === id);
    }

    createTweet(text : string,userName:string){
        const tweet: Tweet = {
            created_at: new Date().toDateString(),
            id:this.tweets.length,
            text,
            user:userName,
            compteur:0,
            compteurDislike:0
        };
        this.tweets.push(tweet);
    }

}

