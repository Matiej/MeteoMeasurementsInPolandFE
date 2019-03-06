import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-online-city',
  templateUrl: './online-city.component.html',
  styleUrls: ['./online-city.component.css']
})
export class OnlineCityComponent implements OnInit {

  @Output() 
  childBodyNotify: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {

  }

}
