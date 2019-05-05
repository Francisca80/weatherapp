import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ForecastService {


   url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/52.025127600000005,5.070914999999999?lat=52.025127600000005&lng=5.070914999999999`;

  constructor(private http: HttpClient) {}


  getForecastData(lat: number, lng: number): Observable<any>  {
    let params = new HttpParams()
    params = params.set('lat', lat.toString() )
    params = params.set('lng', lng.toString() )
    console.log(lat,lng)
    return this.http.get(this.url, { params })
  
  }
}


