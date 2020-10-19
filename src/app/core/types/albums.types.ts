import { ILoadable } from '@store/reducers/loadable.reducer';
import { IPhoto } from './photos.types';

export interface IAlbum {
  id: number;
  title: string;
  photos: ILoadable<IPhoto[]>;
}
