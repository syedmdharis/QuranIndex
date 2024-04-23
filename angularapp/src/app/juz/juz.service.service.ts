import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from "rxjs";
import { IJuz } from './juz';

@Injectable({
  providedIn: 'root'
})
export class JuzService {
    private juzUrl = 'https://api.quran.com/api/v4/juzs' 

  constructor(private http: HttpClient) { }

  getChapter(): Observable<IJuz> {
    return this.http.get<IJuz>(this.juzUrl)
      .pipe(
        tap(data => console.log('Syed Juz: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
