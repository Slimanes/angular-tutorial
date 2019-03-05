import { Component, OnInit } from '@angular/core';
import {Tweet} from '../tweet';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }
  onSave(commentaires: HTMLInputElement){
    //alert('Commentaires ' + document.getElementById('commentaires').value);
  //    alert( commentaires);

      this.tweets.push({ created_at: new Date() , id:commentaires.length+1 , text:commentaires , user:'Slimane',compteur:0});
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
