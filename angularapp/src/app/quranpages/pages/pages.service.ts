import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IPage } from './pages';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private pageUrl = 'http://api.alquran.cloud/v1/page/257';
  constructor(private http: HttpClient) { }

  getPages(): Observable<IPage> {
    return this.http.get<IPage>(this.pageUrl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify([]))),
        catchError(this.handleError)
      );
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
