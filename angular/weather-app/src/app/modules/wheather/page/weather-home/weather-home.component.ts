import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherData';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit {

  initialNameCity = 'São Paulo';
  weatherDatas!: WeatherDatas;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.initialNameCity);
  }

  getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next:(response) => {
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas.main.temp);
      },
      error:  (err) => {
          console.log(err)
      },
    })
  }
}
