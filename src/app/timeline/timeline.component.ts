import {Component, OnInit, ViewChild} from '@angular/core';
import {Tweet} from '../tweet';
import {UserBoxComponent} from '../user-box/user-box.component';
import {User} from '../user';
import {TweetService} from "../tweet.service";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})


export class TimelineComponent implements OnInit {
    @ViewChild(UserBoxComponent)
        user:User = {name:'sly'};
    name: string = '';
    tweets:Tweet[];

    constructor(private tweetsService: TweetService){}


  constructor() { }

  ngOnInit() {
        this.getTweets();
  }
  addTweet(text: string){}

  getTweets():void{
      this.tweets = this.tweetsService.getTweets()
  }
  onSave(commentaires: HTMLInputElement){
    //alert('Commentaires ' + document.getElementById('commentaires').value);
  //    alert( commentaires);

      this.tweets.push({ created_at: new Date() , id:commentaires.length+1 , text:commentaires , user:this.user.name ,compteur:0});
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
