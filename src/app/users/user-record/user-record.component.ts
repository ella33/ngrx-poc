import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@store/reducers';
import { getUserDetails } from '@store/actions/users.actions';
import { getAlbums } from '@store/actions/albums.actions';
import { getPhotos } from '@store/actions/photos.actions';
import { Observable, Subscription } from 'rxjs';
import { IUser } from '@app/core/types/users.types';
import { selectUserRecord } from '@store/selectors/users.selectors';
import { selectAlbums } from '@store/selectors/albums.selectors';
import { ILoadable } from '@store/reducers/loadable.reducer';
import { IAlbum } from '@app/core/types/albums.types';

@Component({
  selector: 'app-user-record',
  templateUrl: './user-record.component.html',
  styleUrls: ['./user-record.component.scss']
})
export class UserRecordComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private store: Store<IAppState>,
  ) {}

  private sub: Subscription;
  userRecord$: Observable<ILoadable<IUser>> = this.store.pipe(select(selectUserRecord));
  albums$: Observable<ILoadable<IAlbum[]>> = this.store.pipe(select(selectAlbums));

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.store.dispatch(getUserDetails({ id: params.id }));
      this.store.dispatch(getAlbums({ userId: params.id }));
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  trackAlbumsById(index: number, album: IAlbum): string {
    return album.id.toString();
  }

  onAlbumPanelExpanded(album: IAlbum): void {
    /**
     * Album photo collections are loaded on request, when the
     * album panel is expanded.
     */
    if (!album.photos) {
      this.store.dispatch(getPhotos({ albumId: album.id }));
    }
  }
}
