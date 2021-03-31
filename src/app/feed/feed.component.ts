import { Component, OnInit } from '@angular/core';
import { Tweets } from '../models/Tweet';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  tweets: Tweets[];
  inputTweet: string = '';
  constructor() {}

  ngOnInit(): void {
    this.tweets = [
      {
        content: 'Fösta tweeten!',
        user: 'Tomas Karf',
        username: 'tkarf',
        date: 'kolla upp',
      },
      {
        content: 'Angular tweets - fungerar perfekt',
        user: 'Angular Pro',
        username: 'angularpro',
        date: 'kolla upp',
      },
    ];
  }

  postTweet() {
    this.tweets.push({
      content: this.inputTweet,
      user: 'Pro User',
      username: 'username',
      date: 'to be added',
    });
  }
}
