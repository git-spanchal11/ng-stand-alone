import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { LoadingController, Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()

export class HttpLoaderInterceptor implements HttpInterceptor {

  constructor(
    public loadingController: LoadingController,
    public platform: Platform
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    console.log('⏳ HttpLoaderInterceptor - Request started:', req.url);
    if (req.url !== '') {
      this.showLoader();
    }

    return next.handle(req).pipe(tap<HttpEvent<any>>((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.log('⏳ HttpLoaderInterceptor - Response received, hiding loader');
        this.hideLoader();
      }
    }, (err: any) => {
      console.log('⏳ HttpLoaderInterceptor - Error occurred, hiding loader');
      this.hideLoader();
    }));
  }

  async showLoader() {
    await this.loadingController.create({
      // cssClass: 'my-custom-class',
      message: 'Please wait...',
      spinner: 'circles',
    }).then((ldr: any) => {
      ldr.present()
    });
  }

  async hideLoader() {
    setTimeout(async () => {
      let topLoader = await this.loadingController.getTop();
      while (topLoader) {
        if (!(await topLoader.dismiss())) {
          await topLoader.dismiss();
          break;
        }
        topLoader = await this.loadingController.getTop();
      }
    }, 1000);
  }

}