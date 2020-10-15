import * as AlbumsActions from '@store/actions/albums.actions';
import * as PhotosActions from '@store/actions/photos.actions';
import { createReducer, on } from '@ngrx/store';
import { createInitialState, withLoadableReducer } from '@store/reducers/loadable.reducer';
import { ILoadable } from '@store/reducers/loadable.reducer';
import { IAlbum } from '@app/core/types/albums.types';

const albumsInitialState: ILoadable<IAlbum[]> = createInitialState([]);

const albumsBaseReducer = createReducer(
  albumsInitialState,
  on(PhotosActions.getPhotosSuccess, (state, { albumId, data }) => ({
    ...state,
    data: state.data.map((album) => {
      if (album.id === albumId) {
        return { ...album, photos: data };
      }
      return album;
    }),
  })),
);

export const albumsReducer = withLoadableReducer(
  albumsBaseReducer,
  {
    loading: AlbumsActions.getAlbumsLoading,
    done: AlbumsActions.getAlbumsSuccess,
    error: AlbumsActions.getAlbumsFail,
  },
);
