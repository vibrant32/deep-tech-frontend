import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  currentSrc = 'assets/images/hero-img.png';
  buttonName = 'Contact Now';
  currentTitle = 'Welcome To About Page';
  buttonRoute = '/contact';

  constructor() { }

  ngOnInit(): void {
  }

}
