import { IAlbum } from '@app/core/types/albums.types';
import { IUser } from '@app/core/types/users.types';
import { ILoadable } from './loadable.reducer';

export interface IUsersState {
  users: ILoadable<IUser[]>;
}

export interface IUserRecordState {
  userRecord: ILoadable<IUser>;
  albums: ILoadable<IAlbum[]>;
}

export interface IAppState {
  users: IUsersState;
  userRecord: IUserRecordState;
}
