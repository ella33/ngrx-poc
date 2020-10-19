import { IAlbum } from '@app/core/types/albums.types';
import { createAction, props } from '@ngrx/store';

export const getAlbums = createAction(
  '[User Record Page] Get albums',
  props<{ userId: number }>(),
);

export const getAlbumsSuccess = createAction(
  '[User Record Page] Get albums success',
  props<{ data: IAlbum[] }>(),
);

export const getAlbumsFail = createAction(
  '[User Record Page] Get albums fail',
);
