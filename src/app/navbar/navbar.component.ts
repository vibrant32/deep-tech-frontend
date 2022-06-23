import { Component, OnInit } from '@angular/core';
import { navlinks } from './navlinks';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navlinks = navlinks;

  constructor() { }

  ngOnInit(): void {
  }

}
