import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '19bcdcc54a9e9ddaa8163e1998160564';

  constructor(private http: HttpClient) {}

  getWeatherData(cityName: String): Observable<any> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`, {});
  }
}
