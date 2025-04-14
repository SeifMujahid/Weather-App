import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForecastweatherService {
  constructor(private _HttpClient: HttpClient) {}
  key = 'b7f45b63a3c64b639a6161726250404';
  getForecastWeather(location: string, days: number): Observable<any> {
    return this._HttpClient.get(
      `https://api.weatherapi.com/v1/forecast.json?q=${location}&days=${days}&aqi=yes&key=${this.key}`
    );
  }
}
