import { Action, createReducer, on } from '@ngrx/store';
import * as UsersActions from '@store/actions/users.actions';

interface IUser {
  firstName: string,
  userName: string
}

interface State {
  users: IUser[]
}

const initialState: State = {
  users: [],
};