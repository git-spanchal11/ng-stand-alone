import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, Observable, retry, throwError } from "rxjs";

@Injectable()
export class HttpErrorHandelInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {    
        console.log('🔴 HttpErrorHandelInterceptor - Intercepting request:', req.url);
        const http = inject(HttpErrorHandelInterceptor);
        return next.handle(req).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {
                let errorMsg = '';
                if (error.error instanceof ErrorEvent) {
                    // Client-side error
                    errorMsg = `Error: ${error.error.message}`;
                } else {
                    // Server-side error
                    errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                }
                console.error('🔴 HttpErrorHandelInterceptor - Error caught:', errorMsg);
                return throwError(() => errorMsg);
            })
        );
    }
}
