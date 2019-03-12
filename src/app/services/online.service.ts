import { City } from './../model/city';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { OnlineMeasurement } from '../model/onlineMeasurement';

@Injectable({
  providedIn: "root"
})
export class OnlineService {
  private baseUrl = "//localhost:8080/online";
  private homeUrl = "//192.168.1.101:8080/online";

  constructor(private http: HttpClient) {}

  getAllOnlineMeasuringStationList(): Observable<Array<OnlineMeasurement>> {
    return this.http.get<Array<OnlineMeasurement>>(this.baseUrl + "/allSt");
  }

  getAllOnlineCities(): Observable<Array<City>> {
    return this.http.get<Array<City>>(this.baseUrl+"//allCities");
  }
}
