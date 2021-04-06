import { Component, OnInit, Input } from '@angular/core';
import { LotrService } from '../service/lotr.service';
import { Observable } from 'rxjs';
import { LotrMovie } from '../models/LotrMovie';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  lotr: LotrMovie[];
  constructor(private lotrService: LotrService) {}
  ngOnInit(): void {
    this.lotrService.getPosts().subscribe((data) => {
      this.lotr = data;
    });
  }
}
