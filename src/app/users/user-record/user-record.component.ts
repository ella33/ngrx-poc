import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@store/reducers';
import { getUserDetails } from '@store/actions/users.actions';
import { Observable, Subscription } from 'rxjs';
import { IUser } from '@app/core/types/users.types';
import { selectUserRecord } from '@store/selectors/users.selectors';
import { ILoadable } from '@store/reducers/loadable.reducer';

@Component({
  selector: 'app-user-record',
  templateUrl: './user-record.component.html',
  styleUrls: ['./user-record.component.sass']
})
export class UserRecordComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private store: Store<IAppState>,
  ) {}

  private sub: Subscription;
  userRecord$: Observable<ILoadable<IUser>> = this.store.pipe(select(selectUserRecord));

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.store.dispatch(getUserDetails({ id: params.id }));
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
