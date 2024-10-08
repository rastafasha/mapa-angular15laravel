import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Params, Router } from '@angular/router';
//import { Datosvictima } from '../models/datos';

import { PaisResponsive } from '../../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class DatosvictimaService {

  public datosvictima!: string;

  public serverUrl!: string;
  public storageUrl!: string;
  public identity: any;
  public token: any;


  constructor(private http: HttpClient, public router: Router) {
    this.serverUrl = environment.url_servicios;
  }

  getDDatosvictimas() {
    return this.http.get<PaisResponsive>(this.serverUrl + '/eventos').pipe(
      catchError(this.handleError)
    );
  }

  getDatosvictima(code: string) {
    return this.http.get<PaisResponsive>(this.serverUrl + '/evento/code/' + code).pipe(
      catchError(this.handleError)
    );
  }

  getDatosvictimabyPais(code: string | number): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get( this.serverUrl + '/evento/code/' + code, {headers});

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
