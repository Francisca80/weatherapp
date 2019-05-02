import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'weather-view',
  templateUrl: './weather-view-component.html',
  styleUrls: ['./weather-view-component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class WeatherViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
