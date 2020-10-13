import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { usersReducer, userRecordReducer } from '@store/reducers/users.reducer';
import { UsersEffects } from '@store/effects/users.effects';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { UserRecordComponent } from './user-record/user-record.component';


@NgModule({
  declarations: [UsersComponent, UserRecordComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatTabsModule,
    UsersRoutingModule,
    StoreModule.forFeature(
      'users',
      {
        users: usersReducer,
        userRecord: userRecordReducer,
      }),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class UsersModule { }
