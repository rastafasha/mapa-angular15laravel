import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Video } from '../../models/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  serverUrl = environment.url_backend;

  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get<Video>(this.serverUrl + 'api_video/videos/').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedVideos() {
    return this.http.get<Video>(this.serverUrl + 'api_video/featured_videos/').pipe(
      catchError(this.handleError)
    );
  }

  getVideo(id: number) {
    return this.http.get<Video>(this.serverUrl + 'api_video/video/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentVideos() {
    return this.http.get<Video>(this.serverUrl + 'api_video/recent_videos/').pipe(
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
