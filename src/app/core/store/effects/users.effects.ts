import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { getUsers, getUsersSuccess } from '@store/actions/users.actions';
import { UsersService } from '@services/users.service';
import { IUser } from '@app/core/types/users.types';

const mapServerToLocalUsers = (data: any) => data.map((user: any): IUser => ({
  id: user.id,
  name: user.name,
  userName: user.username,
  email: user.email,
  phone: user.phone,
  website: user.website,
}));

@Injectable({
  providedIn: 'root',
})
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsersService,
  ) {}

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(getUsers),
    mergeMap(() => this.usersService.getAll()
    .pipe(
      map((data: any[]) => getUsersSuccess({ data: mapServerToLocalUsers(data) }),
      catchError(() => EMPTY))
    ))
  ));
}
