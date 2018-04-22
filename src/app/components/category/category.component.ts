import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film-service.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public films$: Subscription;
  public films;

  constructor(private filmService: FilmService) {}

  ngOnInit() {
    this.films$ = this.filmService.fetchFilms().subscribe(films => {
      this.films = films;
    });
    console.log('This: ', this);
  }

}
