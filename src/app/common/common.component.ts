import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  @Input() src = '';
  @Input() btnname = '';
  @Input() title = '';
  @Input() route = '';

  constructor() { }

  ngOnInit(): void {
  }

}
