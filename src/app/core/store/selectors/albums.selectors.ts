import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAppState, IUsersState } from '@store/reducers';

const selectFeature = createFeatureSelector<IAppState, IUsersState>('users');

export const selectAlbums = createSelector(
  selectFeature,
  (state) => state.albums,
);
