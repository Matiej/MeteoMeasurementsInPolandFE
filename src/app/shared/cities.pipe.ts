import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cities'
})
export class CitiesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
