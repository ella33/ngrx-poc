import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { usersReducer } from '@store/reducers/users.reducer';
import { UsersEffects } from '@store/effects/users.effects';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature('users', { users: usersReducer }),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class UsersModule { }
