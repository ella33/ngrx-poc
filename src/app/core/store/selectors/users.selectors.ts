import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAppState, IUsersState } from '@store/reducers';

const selectFeature = createFeatureSelector<IAppState, IUsersState>('users');

export const selectUsers = createSelector(
  selectFeature,
  (state) => state.users,
);

