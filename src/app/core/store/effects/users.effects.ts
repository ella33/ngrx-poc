import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as UsersActions from '@store/actions/users.actions';
import { UsersService } from '@services/users.service';
import { mapServerToLocalUserDetails, mapServerToLocalUsers } from './mappingFunctions/users';

@Injectable({
  providedIn: 'root',
})
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsersService,
  ) {}

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.getUsers),
    mergeMap(() =>
      this.usersService.getAll()
        .pipe(
          map((data: any[]) => UsersActions.getUsersSuccess({ data: mapServerToLocalUsers(data) })),
          catchError(() => of(UsersActions.getUsersFail())),
        ),
      ))
    );

  loadUserDetails$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.getUserDetails),
    mergeMap((action) =>
      this.usersService.getUserDetails(action.id)
        .pipe(
          map((data: any) => UsersActions.getUserDetailsSuccess({ data: mapServerToLocalUserDetails(data) })),
          catchError(() => of(UsersActions.getUserDetailsFail())),
        ),
      ))
    );
}
