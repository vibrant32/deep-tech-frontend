import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentSrc = 'assets/images/img2.svg';
  currentTitle = 'Grow Your Business With';
  buttonName = 'Get Started';
  buttonRoute = "/service";

  constructor() { }

  ngOnInit(): void {
  }

}
