export class AirMeasurement{
   
    private _id: number;
    private _foreignId: number;
    private _measurementDate: Date;
    private _saveDate: Date;
    private _airQuality: string;
    private _stIndexLevel: string; //powietrze ogólnie
    private _so2IndexLevel: string; //dwutlenek siarki
    private _no2IndexLevel: string; //dwutlenek azotu
    private _coIndexLevel: string; //tlenek wegla
    private _pm10IndexLevel: string; //pył zawieszony PM10
    private _pm25IndexLevel: string;
    private _o3IndexLevel: string;
    private _c6h6IndexLevel: string;
  
    public get id(): number {
      return this._id;
    }
  
    public get foreignId(): number {
      return this._foreignId;
    }
  
    public get measurementDate(): Date {
      return this._measurementDate;
    }
  
    public get saveDate(): Date {
      return this._saveDate;
    }
  
      /**
       * Getter airQuality
       * @return {string}
       */
      public get airQuality(): string {
          return this._airQuality;
      }
  
      /**
       * Setter airQuality
       * @param {string} value
       */
      public set airQuality(value: string) {
          this._airQuality = value;
      }
  
  
    public get stIndexLevel(): string {
      return this._stIndexLevel;
    }
  
    public get so2IndexLevel(): string {
      return this._so2IndexLevel;
    }
  
    public get no2IndexLevel(): string {
      return this._no2IndexLevel;
    }
  
    public get coIndexLevel(): string {
      return this._coIndexLevel;
    }
  
    public get pm10IndexLevel(): string {
      return this._pm10IndexLevel;
    }
  
    public get pm25IndexLevel(): string {
      return this._pm25IndexLevel;
    }
  
    public get o3IndexLevel(): string {
      return this._o3IndexLevel;
    }
  
    public get c6h6IndexLevel(): string {
      return this._c6h6IndexLevel;
    }
  
    public set id(value: number) {
      this._id = value;
    }
  
    public set foreignId(value: number) {
      this._foreignId = value;
    }
  
    public set measurementDate(value: Date) {
      this._measurementDate = value;
    }
  
    public set saveDate(value: Date) {
      this._saveDate = value;
    }
  
    public set stIndexLevel(value: string) {
      this._stIndexLevel = value;
    }
  
    public set so2IndexLevel(value: string) {
      this._so2IndexLevel = value;
    }
  
    public set no2IndexLevel(value: string) {
      this._no2IndexLevel = value;
    }
  
    public set coIndexLevel(value: string) {
      this._coIndexLevel = value;
    }
  
    public set pm10IndexLevel(value: string) {
      this._pm10IndexLevel = value;
    }
  
    public set pm25IndexLevel(value: string) {
      this._pm25IndexLevel = value;
    }
  
    public set o3IndexLevel(value: string) {
      this._o3IndexLevel = value;
    }
  
    public set c6h6IndexLevel(value: string) {
      this._c6h6IndexLevel = value;
    }
}