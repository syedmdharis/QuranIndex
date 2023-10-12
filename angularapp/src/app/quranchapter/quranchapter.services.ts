import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { IChapter } from "./chapters";

@Injectable({
  providedIn: 'root'
})

export class QuranChapterService {
  private chapterUrl = 'https://api.quran.com/api/v4/chapters?language=en'

  constructor(private http: HttpClient) { }

  getChapter(): Observable<IChapter> {
    let url = this.chapterUrl
    return this.http.get<IChapter>(url)
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
