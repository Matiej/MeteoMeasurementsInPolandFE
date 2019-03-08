import { City } from './../model/city';
import { Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Pipe({
  name: 'citiesSorter'
})
export class CitiesSorterPipe implements PipeTransform {

  transform(value: MatTableDataSource<City>, args?: any): MatTableDataSource<City> {
    // return value;
    value.data.sort((a,b) => {
      if(a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
    return value;
  }

}
