
import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpErrorHandelInterceptor } from "./http-error-handel.interceptor";
import { HttpResponseHandelInterceptor } from "./http-response-handel.interceptor";
import { HttpLoaderInterceptor } from "./http-loader.interceptor";

export const interceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpResponseHandelInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorHandelInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpLoaderInterceptor, multi: true }
];
