import { Component, OnInit } from '@angular/core';
import { DataEmitService } from '../services/dataEmit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataEmit: DataEmitService) { }

  ngOnInit() {
    this.dataEmit.changeMessage("bodyW");
  }

}
