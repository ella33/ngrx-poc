import { IPhoto } from './photos.types';

export interface IAlbum {
  id: number;
  title: string;
  photos: IPhoto[];
}
