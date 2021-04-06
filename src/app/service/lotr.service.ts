import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { LotrMovie } from '../models/LotrMovie';

const httpOptions = new HttpHeaders({
  Authorization: 'Bearer p4p10XwSHeU3NuXFxr_9',
});

@Injectable({
  providedIn: 'root',
})
export class LotrService {
  // URL which returns list of JSON items (API end-point URL)
  private readonly URL = 'https://the-one-api.dev/v2/movie';

  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<LotrMovie[]> {
    return this.httpClient.get<LotrMovie[]>(
      'https://the-one-api.dev/v2/movie',
      {
        headers: httpOptions,
      }
    );
  }
}
