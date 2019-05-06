import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


import * as constants from '../../src/app/constants/constants';



@Injectable()


export class ForecastService {
 
   

  constructor(private http: HttpClient) {}


  getForecastData(lat: number, lng: number) {
    const apiKey = '674ac5c2df8f31823e3722823eaa60899',
          exclude = '?exclude=flags',
          units = '&units=auto',
          url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${constants.DARKSKY_API_KEY}/${lat},${lng}${exclude}${units}`;

		return this.http.get(url);
  }
}

  


