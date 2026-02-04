import { HttpClient, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpInterface, responseModel } from './http.interface';
import { HttpErrorHandelInterceptor } from '../interceptors/http-error-handel.interceptor';
import { HttpResponseHandelInterceptor } from '../interceptors/http-response-handel.interceptor';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  // private responseModel: responseModel = new responseModel();

  private baseUrl = 'https://api.sampleapis.com/countries/';

  constructor(private http: HttpClient) { }

  public GET(url: string): Observable<any> {
    const fullUrl = `${this.baseUrl}${url}`;
    try {
      return this.http.get<responseModel>(fullUrl)
        .pipe(map((response: any) => {
          return this.handleSuccess(response);
        }),
          catchError(async (error: any) => this.handleErrors(error, fullUrl))
        );
    } catch (error) {
      return of(null);
    }
  }

  handleSuccess(response: any) {
    // Implement any response transformation logic here if needed
    return response;
  }

  handleErrors(error: any, url: string) {
    let errMsg: any;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error} ${err}`;
    } else {
      errMsg = error.toString();
      // errMsg = error.error ? error.error : JSON.stringify(error);
    }
    console.warn(JSON.stringify(`${url} ${errMsg}`));
    return of(errMsg);
  }
}
