import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public links: string[] = ['Home', 'Movies', 'Shows'];
  public snagFilmsLogo: string = '../../../assets/snag-films-logo.png';
  constructor() { }

  ngOnInit() {
  }

}
