import { createAction, props } from '@ngrx/store';
import { IUser } from '@app/core/types/users.types';

export const getUserDetails = createAction(
  '[User Record Page] Get user details',
  props<{ id: number }>(),
);

export const getUserDetailsSuccess = createAction(
  '[User Record Page] Get user details success',
  props<{ data: IUser }>(),
);

export const getUserDetailsFail = createAction(
  '[User Record Page] Get user details fail'
);
