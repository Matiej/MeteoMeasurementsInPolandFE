import { AirMeasurement } from './airMeasurement';
import { SynopticMeasurement } from './synopticMeasurement';
export class OnlineMeasurement {
    
    private _id: number;
    private _gegrLatitude: number;
    private _gegrLongitude: number;
    private _stationName: string;
    private _stationStreet: string;
    private _stationCity: string;
    private _stationDistrict: string;
	private _stationVoivodeship: string;
	private _synopticMs: SynopticMeasurement;
	private _airMs: AirMeasurement;
    
	public get id(): number {
		return this._id;
	}

	public get gegrLatitude(): number {
		return this._gegrLatitude;
	}

	public get gegrLongitude(): number {
		return this._gegrLongitude;
	}

    public get stationName(): string {
		return this._stationName;
	}

	public get stationStreet(): string {
		return this._stationStreet;
	}

	public get stationCity(): string {
		return this._stationCity;
	}

	public get stationDistrict(): string {
		return this._stationDistrict;
	}

	public get stationVoivodeship(): string {
		return this._stationVoivodeship;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set gegrLatitude(value: number) {
		this._gegrLatitude = value;
	}

	public set gegrLongitude(value: number) {
		this._gegrLongitude = value;
	}

	public set stationName(value: string) {
		this._stationName = value;
	}

	public set stationStreet(value: string) {
		this._stationStreet = value;
	}

	public set stationCity(value: string) {
		this._stationCity = value;
	}

	public set stationDistrict(value: string) {
		this._stationDistrict = value;
	}

	public set stationVoivodeship(value: string) {
		this._stationVoivodeship = value;
	}


    /**
     * Getter synopticMs
     * @return {SynopticMeasurement}
     */
	public get synopticMs(): SynopticMeasurement {
		return this._synopticMs;
	}

    /**
     * Setter synopticMs
     * @param {SynopticMeasurement} value
     */
	public set synopticMs(value: SynopticMeasurement) {
		this._synopticMs = value;
	}


    /**
     * Getter airMs
     * @return {AirMeasurement}
     */
	public get airMs(): AirMeasurement {
		return this._airMs;
	}

    /**
     * Setter airMs
     * @param {AirMeasurement} value
     */
	public set airMs(value: AirMeasurement) {
		this._airMs = value;
	}

}