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
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac nisl suscipit, tempor nunc sit amet, molestie mi. Vestibulum eget purus eget justo tincidunt.',
        user: 'Jack Bauer',
        username: 'jackbauer',
        date: 'kolla upp',
        imageUrl:
          'https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac nisl suscipit, tempor nunc sit amet, molestie mi. Vestibulum eget purus eget justo tincidunt.',
        user: 'Angular Pro',
        username: 'angularpro',
        date: 'kolla upp',
        imageUrl: '',
      },
    ];
  }

  postTweet() {
    this.tweets.push({
      content: this.inputTweet,
      user: 'Pro User',
      username: 'username',
      date: 'to be added',
      imageUrl:
        'https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    });
  }
}
