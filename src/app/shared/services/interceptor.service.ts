import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modified = req.clone({
      setHeaders: { 'content-type': 'application/json' },
      params: req.params.set('app_id', 'a887f07e').set('app_key', '1b4d3a1fbed4a9ca2107ff520b5a8368')
    });
    return next.handle(modified);
  }
}

