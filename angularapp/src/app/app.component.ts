import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <nav>
  <div class="wrapper">
   <div class="logo"><a href="#">{{pageTitle}}</a></div>
    <ul class='nav-links'>
      <li><a class='nav-links' routerLink='/welcome'>Home</a></li>
      <li><a class='nav-links' routerLink='/surahs'>Surah</a></li>
      <li><a class='nav-links' routerLink='/quranchapter'>Quran chapter</a></li>
      <li><a class='nav-links' routerLink='/pages'>Pages</a></li>
    </ul>     
  </div>
  </nav>
  <br>
  <br>
  <br>
  <br>
  <br>
  <div class='container'>
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
