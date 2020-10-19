import * as UserRecordActions from '@store/actions/userRecord.actions';
import { createReducer } from '@ngrx/store';
import { createInitialState, withLoadableReducer } from '@store/reducers/loadable.reducer';
import { ILoadable } from '@store/reducers/loadable.reducer';
import { IUser } from '@app/core/types/users.types';

const userRecordInitialState: ILoadable<IUser> = createInitialState(null);

const userRecordBaseReducer = createReducer(userRecordInitialState);

export const userRecordReducer = withLoadableReducer(
  userRecordBaseReducer,
  {
    initiate: UserRecordActions.getUserDetails,
    done: UserRecordActions.getUserDetailsSuccess,
    error: UserRecordActions.getUserDetailsFail,
  },
);
