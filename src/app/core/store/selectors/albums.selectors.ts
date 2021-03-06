import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAppState, IUserRecordState } from '@store/reducers';

const selectFeature = createFeatureSelector<IAppState, IUserRecordState>('userRecord');

export const selectAlbums = createSelector(
  selectFeature,
  (state) => state.albums,
);
