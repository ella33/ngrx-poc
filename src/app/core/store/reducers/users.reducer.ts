import * as UsersActions from '@store/actions/users.actions';
import { createInitialState, withLoadableReducer } from '@store/reducers/loadable.reducer';
import { ILoadable } from '@store/reducers/loadable.reducer';
import { IUser } from '@app/core/types/users.types';

export interface State {
  users: ILoadable<IUser[]>;
  userRecord: ILoadable<IUser>;
}

const usersInitialState: Partial<State> = {
  users: createInitialState([]),
};

const userRecordInitialState: Partial<State> = {
  userRecord: createInitialState(null),
};

export const usersReducer = withLoadableReducer(
  usersInitialState,
  {
    initiate: UsersActions.getUsers,
    loading: UsersActions.getUsersLoading,
    done: UsersActions.getUsersSuccess,
    error: UsersActions.getUsersFail,
  },
);

export const userRecordReducer = withLoadableReducer(
  userRecordInitialState,
  {
    initiate: UsersActions.getUserDetails,
    loading: UsersActions.getUserDetailsLoading,
    done: UsersActions.getUserDetailsSuccess,
    error: UsersActions.getUserDetailsFail,
  },
);
