import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserRecordComponent } from './user-record/user-record.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    pathMatch: 'full',
  },
  {
    path: ':id',
    component: UserRecordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
