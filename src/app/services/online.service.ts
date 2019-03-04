import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class OnlineService {
  private baseUrl = "//localhost:8080/online";
  private homeUrl = "//192.168.1.101:8080/online";

  constructor(private http: HttpClient) {}

  getAllOnlineMeasuringStationList(): Observable<any> {
    return this.http.get(this.baseUrl + "/allSt");
  }
}
