import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { ISurah } from "./surah";

@Injectable({
    providedIn: 'root'
})
export class SurahService {

    private surahUrl = 'api/surah/surahs.json';
    constructor(private http: HttpClient) { }

    getSurah(): Observable<ISurah[]> {
        return this.http.get<ISurah[]>(this.surahUrl)
            .pipe(
                tap(data => console.log('All: ', JSON.stringify(data))),
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

