import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { ApiCancelRequestService } from '@services/apiCancelRequest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-poc';

  constructor(
    private router: Router,
    private apiCancelRequestService: ApiCancelRequestService,
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      if (e instanceof ActivationEnd) {
        this.apiCancelRequestService.cancelPendingRequests();
      }
    });
  }
}
