import { Component, OnInit } from '@angular/core';
import { IUser } from '@app/core/types/users.types';
import { select, Store } from '@ngrx/store';
import { getUsers } from '@store/actions/users.actions';
import { IAppState } from '@store/reducers';
import { ILoadable } from '@store/reducers/loadable.reducer';
import { selectUsers } from '@store/selectors/users.selectors';
import { Observable } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  constructor(
    private store: Store<IAppState>,
    private mediaObserver: MediaObserver,
  ) {
    this.media$ = this.mediaObserver.asObservable();
  }

  media$: Observable<MediaChange[]>;

  users$: Observable<ILoadable<IUser[]>> = this.store.pipe(select(selectUsers));
  tableColumns: string[] = ['name', 'username', 'email', 'phone'];

  ngOnInit(): void {
    this.store.dispatch(getUsers());
    this.media$.subscribe((newVal: MediaChange[]) => {
      const breakpoint = newVal[0].mqAlias;
      switch (breakpoint) {
        case 'xs':
          this.tableColumns = ['name'];
          break;
        case 'sm':
          this.tableColumns = ['name', 'email'];
          break;
        default:
          this.tableColumns = ['name', 'username', 'email', 'phone'];
          break;
      }
    });
  }
}
