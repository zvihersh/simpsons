import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';


@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.scss']
})
export class UserSelectionComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  users: User[] = [];
  selectedUser: User;

  ngOnInit(): void {
    this.getUsers();
  }

  userSelected(user: User) {
    console.log(user);
  }

  getUsers() {
    this.httpClient.get<User[]>('assets/data/users.json').subscribe(users => {
      if (users && users.length > 0) {
        this.users = users;
      }
    });
  }

}
