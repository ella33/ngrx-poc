import * as AlbumsActions from '@store/actions/albums.actions';
import { createReducer } from '@ngrx/store';
import { createInitialState, withLoadableReducer } from '@store/reducers/loadable.reducer';
import { ILoadable } from '@store/reducers/loadable.reducer';
import { IAlbum } from '@app/core/types/albums.types';

const albumsInitialState: ILoadable<IAlbum[]> = {
  ...createInitialState([]),
};

const albumsBaseReducer = createReducer(albumsInitialState);

export const albumsReducer = withLoadableReducer(
  albumsBaseReducer,
  {
    loading: AlbumsActions.getAlbumsLoading,
    done: AlbumsActions.getAlbumsSuccess,
    error: AlbumsActions.getAlbumsFail,
  },
);
