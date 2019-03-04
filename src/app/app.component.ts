import { DataEmitService } from './services/dataEmit.service';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'meteoMatiejFE';
  bodyC: string = "";
  
	constructor(private dataService: DataEmitService) {
  }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(t => {
      this.bodyC = t;
    });
  }
  
}
