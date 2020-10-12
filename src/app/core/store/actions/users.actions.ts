import { createAction, props } from '@ngrx/store';
import { IUser } from '@app/core/types/users.types';

export const getUsers = createAction(
  '[Users Page] Get users'
);

export const getUsersLoading = createAction(
  '[Users Page] Get users loading',
);

export const getUsersSuccess = createAction(
  '[Users Page] Get users success',
  props<{ data: IUser[] }>(),
);

export const getUsersFail = createAction(
  '[Users Page] Get users fail',
);
