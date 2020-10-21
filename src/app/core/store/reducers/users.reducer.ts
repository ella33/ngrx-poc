import * as UsersActions from '@store/actions/users.actions';
import { createReducer } from '@ngrx/store';
import { createInitialState, withLoadableReducer } from '@store/reducers/loadable.reducer';
import { ILoadable } from '@store/reducers/loadable.reducer';
import { IUser } from '@app/core/types/users.types';

const usersInitialState: ILoadable<IUser[]> = createInitialState([]);

const usersBaseReducer = createReducer(usersInitialState);

export const usersReducer = withLoadableReducer(
  usersBaseReducer,
  {
    initiate: UsersActions.getUsers,
    done: UsersActions.getUsersSuccess,
    error: UsersActions.getUsersFail,
  },
);
