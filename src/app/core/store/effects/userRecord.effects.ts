import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as UserRecordActions from '@store/actions/userRecord.actions';
import { UsersService } from '@services/users.service';
import { mapServerToLocalUserDetails } from './mappingFunctions/users';

@Injectable({
  providedIn: 'root',
})
export class UserRecordEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsersService,
  ) {}

  loadUserDetails$ = createEffect(() => this.actions$.pipe(
    ofType(UserRecordActions.getUserDetails),
    switchMap((action) =>
      this.usersService.getUserDetails(action.id)
        .pipe(
          map((data: any) => UserRecordActions.getUserDetailsSuccess({ data: mapServerToLocalUserDetails(data) })),
          catchError(() => of(UserRecordActions.getUserDetailsFail())),
        ),
      ))
    );
}
