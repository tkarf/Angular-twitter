import { Component, OnInit } from '@angular/core';
import { Tweets } from '../models/Tweet';
import * as moment from 'moment';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  tweets: Tweets[];
  inputTweet: string = '';
  timeStamp = new Date();
  currentUser = 'jackbauer';
  constructor() {}

  ngOnInit(): void {
    this.tweets = [
      {
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac nisl suscipit, tempor nunc sit amet, molestie mi. Vestibulum eget purus eget justo tincidunt.',
        user: 'Jack Bauer',
        username: 'jackbauer',
        date: 'Wed Mar 31 2021 15:50:57 GMT+0300 (östeuropeisk sommartid)',
        profilePic:
          'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',

        imageUrl:
          'https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },

      {
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac nisl suscipit, tempor nunc sit amet, molestie mi. Vestibulum eget purus eget justo tincidunt.',
        user: 'Angular Pro',
        username: 'angularpro',
        date: 'Wed Mar 31 2021 16:50:57 GMT+0300 (östeuropeisk sommartid)',
        imageUrl: '',
        profilePic:
          'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac nisl suscipit, tempor nunc sit amet, molestie mi. Vestibulum eget purus eget justo tincidunt.',
        user: 'Angular Pro',
        username: 'angularpro',
        date: 'Wed Mar 31 2021 17:50:57 GMT+0300 (östeuropeisk sommartid)',
        imageUrl: '',
        profilePic:
          'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac nisl suscipit, tempor nunc sit amet, molestie mi. Vestibulum eget purus eget justo tincidunt.',
        user: 'Jack Bauer',
        username: 'jackbauer',
        date: 'Wed Mar 31 2021 12:50:57 GMT+0300 (östeuropeisk sommartid)',
        profilePic:
          'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        imageUrl:
          'https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
    ];
  }

  postTweet() {
    this.tweets.push({
      content: this.inputTweet,
      user: 'Pro User',
      username: this.currentUser,
      date: new Date(),
      profilePic:
        'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      imageUrl:
        'https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    });
  }

  timeSince(date) {
    let time = moment(date).startOf('hour').fromNow();
    return time;
  }

  //Sorts the tweets array by dates
  get sortData() {
    return this.tweets.sort((a, b) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }

  updateTweet(index: number, user: string, updateTweet: Tweets) {
    if (user === this.currentUser) {
      this.tweets[index] = updateTweet;
    }
  }

  deleteTweet(index: number, user: string) {
    if (user === this.currentUser) {
      this.tweets.splice(index, 1);
    }
  }
}
