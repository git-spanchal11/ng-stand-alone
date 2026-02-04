import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const toCamelCase = (str: string): string =>
    str.replace(/([_-][a-z])/g, (g) => g[1].toUpperCase());

const convertKeysToCamelCase = (obj: any): any =>
    obj === null || typeof obj !== 'object' ? obj : Array.isArray(obj) ? obj.map(convertKeysToCamelCase)
        : Object.keys(obj).reduce(
            (res, key) => ({
                ...res,
                [toCamelCase(key)]: convertKeysToCamelCase(obj[key]),
            }),
            {}
        );

@Injectable()
export class HttpResponseHandelInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('✅ HttpResponseHandelInterceptor - Incoming request:', req.url);
        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('✅ HttpResponseHandelInterceptor - Response received:', event.body);
                    // Convert response body keys to camelCase
                    const camelCaseObject = convertKeysToCamelCase(event.body);
                    const modEvent = event.clone({ body: camelCaseObject });
                    console.log('✅ HttpResponseHandelInterceptor - Transformed response:', modEvent.body);
                    return modEvent;
                }
                return event;
            })
        );
    }
}