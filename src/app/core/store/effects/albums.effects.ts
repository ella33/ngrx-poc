import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AlbumsService } from '@services/albums.service';
import { PhotosService } from '@services/photos.service';
import * as AlbumsActions from '@store/actions/albums.actions';
import * as PhotosActions from '@store/actions/photos.actions';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { mapServerToLocalAlbums } from './mappingFunctions/albums';
import { mapServerToLocalPhotos } from './mappingFunctions/photos';

@Injectable({
  providedIn: 'root',
})
export class AlbumsEffects {
  constructor(
    private actions$: Actions,
    private albumsService: AlbumsService,
    private photosService: PhotosService,
  ) {}

  loadAlbumsByUser$ = createEffect(() => this.actions$.pipe(
    ofType(AlbumsActions.getAlbums),
    mergeMap((action) =>
      this.albumsService.getAlbumsByUser(action.userId)
        .pipe(
          map((data: any[]) => AlbumsActions.getAlbumsSuccess({ data: mapServerToLocalAlbums(data) })),
          catchError(() => of(AlbumsActions.getAlbumsFail())),
        ),
      )),
    );

  loadPhotosByAlbum$ = createEffect(() => this.actions$.pipe(
    ofType(PhotosActions.getPhotos),
    mergeMap((action) =>
      this.photosService.getPhotosByAlbum(action.albumId)
        .pipe(
          map((data: any[]) => PhotosActions.getPhotosSuccess({ albumId: action.albumId, data: mapServerToLocalPhotos(data) })),
          catchError(() => of(PhotosActions.getPhotosFail()))
        ),
      ),
    ));
}
