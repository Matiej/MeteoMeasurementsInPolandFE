import { Component, OnInit, Input } from '@angular/core';
import { SynopticMeasurement } from 'src/app/model/synopticMeasurement';

@Component({
  selector: 'app-online-station-syn',
  templateUrl: './online-station-syn.component.html',
  styleUrls: ['./online-station-syn.component.css']
})
export class OnlineStationSynComponent implements OnInit {
  title: string = "SYNOPTIC MEASUREMENT";
  @Input()
  synopticMst: SynopticMeasurement;
  constructor() { }

  ngOnInit() {
  }

}
