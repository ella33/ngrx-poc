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

export const getUserDetails = createAction(
  '[User Record Page] Get user details',
  props<{ id: number }>(),
);

export const getUserDetailsLoading = createAction(
  '[User Record Page] Get user details loading'
);

export const getUserDetailsSuccess = createAction(
  '[User Record Page] Get user details success',
  props<{ data: IUser }>(),
);

export const getUserDetailsFail = createAction(
  '[User Record Page] Get user details fail'
);
