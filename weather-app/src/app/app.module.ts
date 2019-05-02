import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherViewComponent } from './weather-view-component/weather-view-component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    WeatherViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherViewComponent
  ],
  entryComponents:[
    WeatherViewComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { constructor(private injector: Injector) {
  const weatherView = createCustomElement(WeatherViewComponent, { injector });
  customElements.define('weather-view', weatherView);
}

ngDoBootstrap() {}
}