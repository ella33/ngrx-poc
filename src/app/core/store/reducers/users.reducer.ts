import { createReducer } from '@ngrx/store';
import * as UsersActions from '@store/actions/users.actions';
import { createInitialState, withLoadableReducer } from '@store/reducers/loadable.reducer';
import { ILoadable } from '@store/reducers/loadable.reducer';
import { IUser } from '@app/core/types/users.types';

export interface State {
  users: ILoadable<IUser[]>;
}

const initialState: State = {
  users: createInitialState([]),
};

const usersReducerBase = () => createReducer(
  initialState,
);

export const usersReducer = withLoadableReducer(
  usersReducerBase,
  {
    loading: UsersActions.getUsersLoading,
    done: UsersActions.getUsersSuccess,
    error: UsersActions.getUsersFail,
  },
);
