import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather-view-component/weather.component';


const appRoutes: Routes = [

  { path: 'weather', component: WeatherComponent },
  { path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [
  RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
