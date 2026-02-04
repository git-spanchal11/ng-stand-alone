import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app.routes';
import { HttpErrorHandelInterceptor } from './app-core/interceptors/http-error-handel.interceptor';
import { HttpResponseHandelInterceptor } from './app-core/interceptors/http-response-handel.interceptor';
import { HttpLoaderInterceptor } from './app-core/interceptors/http-loader.interceptor';
import { interceptorProviders } from './app-core/interceptors/interceptors.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideIonicAngular(),
    provideHttpClient(),
    // HttpLoaderInterceptor,
    // HttpResponseHandelInterceptor,
    // ...interceptorProviders
  ]
};  
