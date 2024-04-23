import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{{pageTitle}}</a>
    <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" routerLink='/welcome'>Home</a>
        <a class="nav-link" routerLink='/quranchapter'>Quran chapter</a>
        <a class="nav-link" routerLink='/juz'>Juz</a>
        <a class="nav-link" routerLink='/pages'>Pages</a>
      </div>
    </div>
  </div>
</nav>
<div class='container'>
  <router-outlet></router-outlet>
</div>
`
})

export class AppComponent {
  pageTitle: string = 'QURAN';
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
