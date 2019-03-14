import { OnlineService } from "./../../services/online.service";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { City } from "./../../model/city";
import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import {
  trigger,
  state,
  transition,
  animate,
  style
} from "@angular/animations";
import { getInjectionTokens } from "@angular/core/src/render3/discovery_utils";
import { DataEmitService } from 'src/app/services/dataEmit.service';

@Component({
  selector: "app-online-city-list",
  templateUrl: "./online-city-list.component.html",
  styleUrls: [
    "./online-city-list.component.css",
    "../online-data.component.css"
  ],

  animations: [
    trigger("detailExpand", [
      state(
        "void",
        style({ height: "0px", minHeight: "0", visibility: "hidden" })
      ),
      state("*", style({ height: "*", visibility: "visible" })),
      transition("void <=> *", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
    ])
  ]
})
export class OnlineCityListComponent implements OnInit, AfterViewInit {

  @Output()
  childBodyNotify: EventEmitter<string> = new EventEmitter<string>();
  isLoading: boolean = false;
  @Output()
  isCities: EventEmitter<boolean> = new EventEmitter<boolean>();
  cityList: Array<City> = [];
  dataSource: MatTableDataSource<City>;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  isExpasionDetailRow = (idex, row) => row.hasOwnProperty("detailRow");

  constructor(private service: OnlineService, private dataEmitservice: DataEmitService) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.childBodyNotify.emit("bodyR");
    this.isLoading = true;
    this.service.getAllOnlineCities().subscribe((cities: Array<City>) => {
      this.cityList = cities;
      this.dataSource = new MatTableDataSource(this.cityList);
      this.isLoading = false;
      this.isCities.emit(true);
    });
  }

  createDisplayedColumns(): Array<string> {
    const displayedCol: string[] = [];
    displayedCol.push('name');
    displayedCol.push('airMeasurementList');
    displayedCol.push('synopticMeasurement');
    return displayedCol;
  }

  ngAfterViewInit(): void {
    this.service.getAllOnlineCities().subscribe(c => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  getCity(city: City) {
    console.log('CCCccc ' + city.name)
    this.dataEmitservice.changeCity(city);
  }
}
