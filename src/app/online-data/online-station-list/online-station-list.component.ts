import { OnlineService } from "./../../services/online.service";
import { OnlineMeasurement } from "./../../model/onlineMeasurement";
import {
  Component,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
  AfterViewInit
} from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import {
  trigger,
  style,
  transition,
  animate,
  state
} from "@angular/animations";

@Component({
  selector: "app-online-station-list",
  templateUrl: "./online-station-list.component.html",
  styleUrls: [
    "./online-station-list.component.css",
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
export class OnlineStationListComponent implements OnInit, AfterViewInit {
  @Output()
  childBodyNotify: EventEmitter<string> = new EventEmitter<string>();
  private _msDate: Date = new Date();
  isLoading: boolean = false;
  onlineMeasurementList: Array<OnlineMeasurement> = [];
  dataSource: MatTableDataSource<OnlineMeasurement>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isExpansionDetailRow = (index, row) => row.hasOwnProperty("detailRow");

  constructor(private service: OnlineService) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.childBodyNotify.emit("bodyB");
    this.isLoading = true;
    this.service
      .getAllOnlineMeasuringStationList()
      .subscribe((stations: Array<OnlineMeasurement>) => {
        this.onlineMeasurementList = stations;
        this.dataSource = new MatTableDataSource(this.onlineMeasurementList);
        this.isLoading = false;
      });
  }

  public get msDate(): Date {
    return this._msDate;
  }

  public set msDate(value: Date) {
    this._msDate = value;
  }

  createDisplayedColumns(): Array<string> {
    const displayedCol: string[] = [];
    displayedCol.push("id");
    displayedCol.push("stationCity");
    displayedCol.push("stationName");
    displayedCol.push("stationStreet");
    displayedCol.push("stationDistrict");
    displayedCol.push("stationVoivodeship");
    displayedCol.push("gegrLatitude");
    displayedCol.push("gegrLongitude");
    return displayedCol;
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit(): void {
    this.service.getAllOnlineMeasuringStationList().subscribe(t => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
