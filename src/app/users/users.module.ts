import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '@app/shared/shared.module';
import { usersReducer } from '@store/reducers/users.reducer';
import { UsersEffects } from '@store/effects/users.effects';
import { MatTableModule } from '@angular/material/table';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,

    /** Material */
    MatTableModule,

    /** Store */
    StoreModule.forFeature(
      'users',
      {
        users: usersReducer,
      }),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class UsersModule { }
