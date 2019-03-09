import { OnlineMeasurement } from '../model/onlineMeasurement';
import { Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Pipe({
  name: 'stationsSorter'
})
export class StationsPipe implements PipeTransform {

  transform(value: MatTableDataSource<OnlineMeasurement>, args?: any): MatTableDataSource<OnlineMeasurement> {
    value.data.sort()
    // return value;
    value.data.sort((a,b) => {
      if(a.stationCity.toLowerCase() > b.stationCity.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
    return value;
  }
}
