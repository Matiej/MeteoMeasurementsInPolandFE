import { DataEmitService } from "./services/dataEmit.service";
import { Component, AfterViewInit } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  title = "meteoMatiejFE";
  bodyC: string;

  constructor(private dataService: DataEmitService) {}

  ngAfterViewInit(): void {
    this.currentMessage();
  }
  private currentMessage() {
    this.dataService.currentMessage.subscribe((t: string) => {
      setTimeout(() => {
        this.bodyC = t;
      });
    });
  }
}
