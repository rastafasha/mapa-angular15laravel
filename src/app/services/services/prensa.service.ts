import { Injectable } from '@angular/core';
import { Prensa } from '../../models/prensa';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrensaService {

  serverUrl = environment.url_backend;

  constructor(private http: HttpClient) { }

  getPrensas() {
    return this.http.get<Prensa>(this.serverUrl + 'api_articulo/articulos/').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedPrensas() {
    return this.http.get<Prensa>(this.serverUrl + 'api_articulo/featured_articulos/').pipe(
      catchError(this.handleError)
    );
  }

  getPrensa(id: number) {
    return this.http.get<Prensa>(this.serverUrl + 'api_articulo/articulo/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentPrensas() {
    return this.http.get<Prensa>(this.serverUrl + 'api_articulo/recent_articulos/').pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
}
