import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUsers } from '@store/actions/users.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getUsers());
  }
}
