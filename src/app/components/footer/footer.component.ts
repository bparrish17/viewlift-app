import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public links: string[] = ['About Us', 'Privacy Policy', 'Board', 'Terms of Service', 'Contact Us'];
  constructor() { }

  ngOnInit() {
  }

}
