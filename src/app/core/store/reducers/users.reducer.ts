import * as UsersActions from '@store/actions/users.actions';
import { createReducer } from '@ngrx/store';
import { createInitialState, withLoadableReducer } from '@store/reducers/loadable.reducer';
import { ILoadable } from '@store/reducers/loadable.reducer';
import { IUser } from '@app/core/types/users.types';

const usersInitialState: ILoadable<IUser[]> = createInitialState([]);

const userRecordInitialState: ILoadable<IUser> = createInitialState(null);

const usersBaseReducer = createReducer(usersInitialState);

const userRecordBaseReducer = createReducer(userRecordInitialState);

export const usersReducer = withLoadableReducer(
  usersBaseReducer,
  {
    initiate: UsersActions.getUsers,
    loading: UsersActions.getUsersLoading,
    done: UsersActions.getUsersSuccess,
    error: UsersActions.getUsersFail,
  },
);

export const userRecordReducer = withLoadableReducer(
  userRecordBaseReducer,
  {
    initiate: UsersActions.getUserDetails,
    loading: UsersActions.getUserDetailsLoading,
    done: UsersActions.getUserDetailsSuccess,
    error: UsersActions.getUserDetailsFail,
  },
);
