import { IPhoto } from '@app/core/types/photos.types';
import { createAction, props } from '@ngrx/store';

export const getPhotos = createAction(
  '[User Record Page] Get photos',
  props<{ albumId: number }>(),
);

export const getPhotosSuccess = createAction(
  '[User Record Page] Get photos success',
  props<{ albumId: number, data: IPhoto[] }>(),
);

export const getPhotosFail = createAction(
  '[User Record Page] Get photos fail',
);
