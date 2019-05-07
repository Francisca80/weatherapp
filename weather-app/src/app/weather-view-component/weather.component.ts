import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],

})
export class WeatherComponent implements OnInit {
  data: any = {};
  lat: number;
  lng: number;
  forecastWeather: Observable<any>;

  constructor(
    private forecast: ForecastService
  ) {
    this.getLocation();
  }

  ngOnInit() {

  }
  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    } else {
      /// default
      this.lat = 40.73;
      this.lng = -73.93;
    }
  }

  currentForecast() {
    this.forecastWeather = this.forecast.getForecastData(this.lat, this.lng)
      .pipe(tap(data => console.log(data)));
  }

}

