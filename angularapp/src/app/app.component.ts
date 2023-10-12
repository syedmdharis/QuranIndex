import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <nav class='nav navbar-expand navbar-light bg-light'>
    <h4>{{pageTitle}}</h4>
  </nav>
  
  <div class='container'>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
      <li><a class='nav-link' routerLink='/surahs'>Surah</a></li>
      <li><a class='nav-link' routerLink='/quranchapter'>Quran chapter</a></li>
      <li><a class='nav-link' routerLink='/pages'>Pages</a></li>
    </ul> 
    <router-outlet></router-outlet>
  </div> 
  `
})

export class AppComponent {
  pageTitle: string = 'Quran';
}

//@Component({
//  selector: 'app-root',
//  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.css']
//})
//export class AppComponent {
//  public forecasts?: WeatherForecast[];

//  constructor(http: HttpClient) {
//    http.get<WeatherForecast[]>('/weatherforecast').subscribe(result => {
//      this.forecasts = result;
//    }, error => console.error(error));
//  }

//  title = 'angularapp';
//}



//interface WeatherForecast {
//  date: string;
//  temperatureC: number;
//  temperatureF: number;
//  summary: string;
//}
