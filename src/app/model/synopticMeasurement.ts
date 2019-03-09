export class SynopticMeasurement {
    
    private _id: number;
    private _foreignId: number;
    private _cityName: string;
    private _saveDate: Date;
    private _temperature: string;
    private _windSpeed: number;
    private _airHumidity: number;
    private _pressure: number;
    private _measurementDate: string;
    private _measurementHour: string;
    // private City city;


	public get id(): number {
		return this._id;
	}

	public get foreignId(): number {
		return this._foreignId;
	}

	public get cityName(): string {
		return this._cityName;
	}

	public get saveDate(): Date {
		return this._saveDate;
	}

	public get temperature(): string {
		return this._temperature;
	}

	public get windSpeed(): number {
		return this._windSpeed;
	}

	public get airHumidity(): number {
		return this._airHumidity;
	}

	public get pressure(): number {
		return this._pressure;
	}

	public get measurementDate(): string {
		return this._measurementDate;
	}

	public get measurementHour(): string {
		return this._measurementHour;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set foreignId(value: number) {
		this._foreignId = value;
	}

	public set cityName(value: string) {
		this._cityName = value;
	}

	public set saveDate(value: Date) {
		this._saveDate = value;
	}

	public set temperature(value: string) {
		this._temperature = value;
	}

	public set windSpeed(value: number) {
		this._windSpeed = value;
	}

	public set airHumidity(value: number) {
		this._airHumidity = value;
	}

	public set pressure(value: number) {
		this._pressure = value;
	}

	public set measurementDate(value: string) {
		this._measurementDate = value;
    }
    
	public set measurementHour(value: string) {
		this._measurementHour = value;
	}

	public toString = (): string => {
		return this.cityName;
	}
}
