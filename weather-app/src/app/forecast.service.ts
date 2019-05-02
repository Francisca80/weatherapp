import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ForecastService {

  constructor(private http: HttpClient) {}



  getData() {


    const url = `https://api.darksky.net/forecast/674ac5c2df8f31823e3722823eaa6089/37.8267,-122.4233/`;
        console.log('data' + url)
    return this.http.get(url);
  
  }
}

