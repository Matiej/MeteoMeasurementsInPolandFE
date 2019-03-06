import { SynopticMeasurement } from "./synopticMeasurement";
import { AirMeasurement } from "./airMeasurement";
export class City {
    
  private _name: string;
  private _airMeasurementList: Array<AirMeasurement>;
  private _synopticMeasurement: SynopticMeasurement;

  public get name(): string {
    return this._name;
  }

  public get airMeasurementList(): Array<AirMeasurement> {
    return this._airMeasurementList;
  }
  public get synopticMeasurement(): SynopticMeasurement {
    return this._synopticMeasurement;
  }

  public set name(value: string) {
    this._name = value;
  }

  public set airMeasurementList(value: Array<AirMeasurement>) {
    this._airMeasurementList = value;
  }

  public set synopticMeasurement(value: SynopticMeasurement) {
    this._synopticMeasurement = value;
  }
}
