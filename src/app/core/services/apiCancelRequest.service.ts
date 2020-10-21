import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCancelRequestService {
  private cancelPendingRequests$ = new Subject<void>();

  public cancelPendingRequests(): void {
    this.cancelPendingRequests$.next();
  }

  public onCancelPendingRequests(): Observable<void> {
    return this.cancelPendingRequests$.asObservable();
  }
}
