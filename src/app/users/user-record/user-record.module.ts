import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '@app/shared/shared.module';
import { userRecordReducer } from '@store/reducers/userRecord.reducer';
import { albumsReducer } from '@store/reducers/albums.reducer';
import { UserRecordEffects } from '@store/effects/userRecord.effects';
import { AlbumsEffects } from '@store/effects/albums.effects';
import { UserRecordComponent } from './user-record/user-record.component';
import { PhotosGridComponent } from './photos-grid/photos-grid.component';
import { UserRecordRoutingModule } from './user-record-routing.module';

@NgModule({
  declarations: [UserRecordComponent, PhotosGridComponent],
  imports: [
    CommonModule,
    UserRecordRoutingModule,
    SharedModule,

    /** Material */
    MatTabsModule,
    MatExpansionModule,
    MatChipsModule,
    MatCardModule,

    /** Store */
    StoreModule.forFeature(
      'userRecord',
      {
        userRecord: userRecordReducer,
        albums: albumsReducer,
      }),
    EffectsModule.forFeature([UserRecordEffects, AlbumsEffects]),
  ],
})
export class UserRecordModule {}
