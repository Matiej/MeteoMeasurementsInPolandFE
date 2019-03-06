import { DataEmitService } from "./../services/dataEmit.service";
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter
} from "@angular/core";
import { OnlineStationListComponent } from "./online-station-list/online-station-list.component";

@Component({
  selector: "app-online-data",
  templateUrl: "./online-data.component.html",
  styleUrls: ["./online-data.component.css"]
})
export class OnlineDataComponent implements OnInit {
  onlineBody: string = "";
  isCityList: boolean = false;
  isStationList: boolean = false;

  constructor(private dataService: DataEmitService) {}

  ngOnInit() {
    this.dataService.changeMessage('bodyForest');
  }

  onBodyNotify(childBodyNotify: string): void {
    console.log("childbodynoty " + childBodyNotify);
    this.dataService.changeMessage(childBodyNotify);
  }

  onStationsButton() {
    if(this.isStationList==true) {
      this.dataService.changeMessage('bodyForest');
    }
    this.isStationList = !this.isStationList;
    if(this.isCityList==true) {
      this.isCityList = false;
    }    
  }
  onCityButton() {
    if(this.isCityList==true) {
      this.dataService.changeMessage('bodyForest');
    }
    this.isCityList = !this.isCityList;
    if(this.isStationList == true){
      this.isStationList = false;
    }
  }
}
