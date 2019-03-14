import { DataEmitService } from './../../services/dataEmit.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { City } from 'src/app/model/city';

@Component({
  selector: 'app-online-city',
  templateUrl: './online-city.component.html',
  styleUrls: ['./online-city.component.css']
})
export class OnlineCityComponent implements OnInit {

  @Output() 
  childBodyNotify: EventEmitter<string> = new EventEmitter<string>();
  newCity: City;
  isCity: boolean = false;


  constructor(private emitService: DataEmitService) { }

  ngOnInit() {
    this.emitService.currentCity.subscribe((city:City) => {
      this.newCity = city;
      if(city.name){
        this.isCity = true;
      }
      console.log("dd "+city.name);
    })
  }
}
