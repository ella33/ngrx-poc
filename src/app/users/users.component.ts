import { Component, OnInit } from '@angular/core';
import { IUser } from '@app/core/types/users.types';
import { select, Store } from '@ngrx/store';
import { getUsers } from '@store/actions/users.actions';
import { IAppState } from '@store/reducers';
import { ILoadable } from '@store/reducers/loadable.reducer';
import { selectFeatureUsers } from '@store/selectors/users.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  constructor(private store: Store<IAppState>) { }

  users$: Observable<ILoadable<IUser[]>> = this.store.pipe(select(selectFeatureUsers));

  ngOnInit(): void {
    this.store.dispatch(getUsers());
  }
}
