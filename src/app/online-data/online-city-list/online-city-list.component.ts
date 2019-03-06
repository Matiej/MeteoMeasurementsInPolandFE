import { OnlineService } from './../../services/online.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { City } from './../../model/city';
import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-online-city-list',
  templateUrl: './online-city-list.component.html',
  styleUrls: ['./online-city-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('void', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('*', style({ height: '*', visibility: 'visible' })),
      transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class OnlineCityListComponent implements OnInit {

  @Output() 
  childBodyNotify: EventEmitter<string> = new EventEmitter<string>();
  isLoading: boolean = false;
  cityList: Array<City> = [];
  datasource: MatTableDataSource<City>;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  isExpasionDetailRow = (idex, row) => row.hasOwnProperty('detailRow');


  constructor(private service: OnlineService) { 
    this.datasource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.childBodyNotify.emit('bodyR');
    this.isLoading = true;
  }

}
