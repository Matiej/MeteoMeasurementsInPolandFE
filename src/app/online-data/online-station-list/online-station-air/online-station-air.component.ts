import { Component, OnInit, Input } from '@angular/core';
import { AirMeasurement } from 'src/app/model/airMeasurement';

@Component({
  selector: 'app-online-station-air',
  templateUrl: './online-station-air.component.html',
  styleUrls: ['./online-station-air.component.css']
})
export class OnlineStationAirComponent implements OnInit {
  title: string = 'AIR MEASUREMENT';
  title2: string = "AIR MEASUREMENT DETAILS";
  @Input()
  airMst: AirMeasurement;

  constructor() { }

  ngOnInit() {
  }

}
