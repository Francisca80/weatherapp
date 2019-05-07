import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


import * as constants from '../../src/app/constants/constants';



@Injectable()


export class ForecastService {


  constructor(private http: HttpClient) { }


  getForecastData(lat: number, lng: number) {
    const exclude = '?exclude=flags';
    const units = '&units=auto';
    const  url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${constants.DARKSKY_API_KEY}/${lat},${lng}${exclude}${units}`;

    return this.http.get(url);
  }
}




