import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAppState, IUserRecordState } from '@store/reducers';

const selectFeature = createFeatureSelector<IAppState, IUserRecordState>('userRecord');

export const selectUserRecord = createSelector(
  selectFeature,
  (state) => state.userRecord,
);
