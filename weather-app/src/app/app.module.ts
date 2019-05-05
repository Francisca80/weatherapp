import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent} from './weather-view-component/weather.component'
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { ForecastService} from './forecast.service'


const appRoutes: Routes = [
  { path: 'weather', component: WeatherComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes) ],
  providers: [ ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule {

 
 }