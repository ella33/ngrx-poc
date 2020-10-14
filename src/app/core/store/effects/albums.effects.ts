import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AlbumsService } from '@services/albums.service';
import * as AlbumsActions from '@store/actions/albums.actions';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { mapServerToLocalAlbums } from './mappingFunctions/albums';

@Injectable({
  providedIn: 'root',
})
export class AlbumsEffects {
  constructor(
    private actions$: Actions,
    private albumsService: AlbumsService
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
}
