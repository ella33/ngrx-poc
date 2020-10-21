import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BASE_URL, API_REQUEST_METHODS } from '@app/Constants';
import { ApiCancelRequestService } from './apiCancelRequest.service';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptor implements HttpInterceptor {
  constructor(private apiCancelRequestService: ApiCancelRequestService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({ url: `${BASE_URL}/${req.url}` });

    /** Cancel GET requests when service marks it (eg. on route change). */
    if (apiReq.method === API_REQUEST_METHODS.GET) {
      return next.handle(apiReq)
        .pipe(takeUntil(this.apiCancelRequestService.onCancelPendingRequests()));
    }
    return next.handle(apiReq);
  }
}
