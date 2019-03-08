import {Component, OnInit, ViewChild} from '@angular/core';
import {Tweet} from '../tweet';
import {UserBoxComponent} from '../user-box/user-box.component';
import {User} from '../user';
import {TweetService} from '../tweet.service';
import {Router} from '@angular/router';

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

  constructor(private tweetsService: TweetService,private router: Router){}


  ngOnInit() {
        this.getTweets();
  }
  goToDetail(tweetId: number ){
        this.router.navigateByUrl('/detail/' + tweetId);
  }

  addTweet(text: string){}

  getTweets():void{
      this.tweets = this.tweetsService.getTweets();
  }
  onSave(commentaires: HTMLInputElement){
    //alert('Commentaires ' + document.getElementById('commentaires').value);
  //    alert( commentaires);

      this.tweets.push({ created_at: new Date().toDateString() , id: this.tweets.length + 1 , text:commentaires.value ,
          user:this.user.name ,compteur : 0,compteurDislike:0});
  }



}
