import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';

@Injectable()
export class FilmService {
  private snagFilmsRoute: string = 'http://www.snagfilms.com/apis/films.json?limit=10';

  constructor(private http: HttpClient) {}

  fetchFilms() {
    return this.http.get(this.snagFilmsRoute).map(films => films.films.film);
  }
}
