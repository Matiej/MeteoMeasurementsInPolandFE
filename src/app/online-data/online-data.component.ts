import { DataEmitService } from './../services/dataEmit.service';
import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { OnlineStationListComponent } from './online-station-list/online-station-list.component';

@Component({
  selector: 'app-online-data',
  templateUrl: './online-data.component.html',
  styleUrls: ['./online-data.component.css'],
})
export class OnlineDataComponent implements OnInit{

  onlineBody: string = '';

  constructor(private dataService: DataEmitService) {
    
   }

  ngOnInit() {
  }

  onBodyNotify(childBodyNotify: string): void {
    this.dataService.changeMessage(childBodyNotify);
  }


}
