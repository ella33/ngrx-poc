import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '@store/reducers/users.reducer';
import { IAppState } from '@store/reducers';

const selectFeature = createFeatureSelector<IAppState, State>('users');

export const selectFeatureUsers = createSelector(
  selectFeature,
  (state) => state.users,
);
