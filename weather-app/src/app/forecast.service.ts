import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import * as constants from '../../src/app/constants/constants';



@Injectable()


export class ForecastService {
 
   url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${constants.DARKSKY_API_KEY}/`;

  constructor(private http: HttpClient) {}


  getForecastData(lat: number, lng: number): Observable<any>  {
    let params = new HttpParams()
    params = params.set('lat', lat.toString() )
    params = params.set('lng', lng.toString() )
    console.log(lat,lng)

    return this.http.get(this.url, {params:params})
    
  
  }
}


