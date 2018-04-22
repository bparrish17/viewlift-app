// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilmComponent } from './components/film/film.component';
import { CategoryComponent } from './components/category/category.component';
import { CarouselComponent } from './components/carousel/carousel.component';

// Services
import { FilmService } from './services/film-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilmComponent,
    CategoryComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
