import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FilmService {
  private snagFilmsRoute: string = 'http://www.snagfilms.com/apis/films.json?limit=10';

  constructor(private http: HttpClient) {}

  fetchFilms() {
    return this.http.get(this.snagFilmsRoute);
  }
}
