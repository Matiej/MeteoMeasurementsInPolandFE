import { City } from './../model/city';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataEmitService {
private messageSource = new BehaviorSubject<string>('');
currentMessage = this.messageSource.asObservable();

private citySource = new BehaviorSubject<City>(new City);
currentCity = this.citySource.asObservable();

constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeCity(newCity: City) {
    this.citySource.next(newCity);
  }
}
