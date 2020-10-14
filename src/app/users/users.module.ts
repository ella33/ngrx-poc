import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { usersReducer, userRecordReducer } from '@store/reducers/users.reducer';
import { albumsReducer } from '@store/reducers/albums.reducer';
import { UsersEffects } from '@store/effects/users.effects';
import { AlbumsEffects } from '@store/effects/albums.effects';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { UserRecordComponent } from './user-record/user-record.component';


@NgModule({
  declarations: [UsersComponent, UserRecordComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,

    /** Material */
    MatTableModule,
    MatTabsModule,
    MatExpansionModule,

    /** Store */
    StoreModule.forFeature(
      'users',
      {
        users: usersReducer,
        userRecord: userRecordReducer,
        albums: albumsReducer,
      }),
    EffectsModule.forFeature([UsersEffects, AlbumsEffects]),
  ],
})
export class UsersModule { }
