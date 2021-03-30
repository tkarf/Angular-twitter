import { Component, OnInit } from '@angular/core';
import { Tweets } from '../models/Tweet';

@Component({
  selector: 'app-displaytweets',
  templateUrl: './displaytweets.component.html',
  styleUrls: ['./displaytweets.component.css'],
})
export class DisplaytweetsComponent implements OnInit {
  tweets: Tweets[];

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
}
