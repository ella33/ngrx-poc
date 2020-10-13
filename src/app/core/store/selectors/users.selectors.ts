import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '@store/reducers/users.reducer';
import { IAppState } from '@store/reducers';

const selectFeature = createFeatureSelector<IAppState, State>('users');

export const selectUsers = createSelector(
  selectFeature,
  (state) => state.users,
);

export const selectUserRecord = createSelector(
  selectFeature,
  (state) => state.userRecord,
);
