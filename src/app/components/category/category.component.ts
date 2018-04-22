import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public films$: Observable<any>;

  constructor(private filmService: FilmService) {}

  ngOnInit() {
    this.films$ = this.filmService.fetchFilms();
    console.log('This: ', this);
  }

}
