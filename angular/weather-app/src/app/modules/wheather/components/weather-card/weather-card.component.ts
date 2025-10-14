import { Component, Input, OnInit } from '@angular/core';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherData';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent implements OnInit {

  @Input() weatherDataInput!: WeatherDatas;

  ngOnInit(): void {
    console.log("Dados recebidos do componente pai: ", this.weatherDataInput);
  }

}
