import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';

import { AuthService } from '../services/auth.service';
import { JWT } from '../models/auth.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        this.authService.init();

        const jwt: JWT | null = this.authService.jwt;

        if (jwt) {
            const req = request.clone({
                withCredentials: true,
                setHeaders: {
                    Authorization: `Bearer ${jwt.token}`,
                }
            });
            return next.handle(req);
        }
        return next.handle(request);
    }
}
