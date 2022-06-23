import { Component, OnInit } from '@angular/core';
import { services } from './services';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  services = services;

  constructor() { }

  ngOnInit(): void {
  }

}
