import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WithCredentialInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.withCredentials) {
      const req: HttpRequest<any> = request.clone({
        withCredentials: true
      });
      return next.handle(req);
    }
    return next.handle(request);
  }
}