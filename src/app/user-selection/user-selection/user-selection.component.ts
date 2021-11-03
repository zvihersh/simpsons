import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AccountsService } from '../services/accounts.service';


@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.scss']
})
export class UserSelectionComponent implements OnInit {

  constructor(private accountsService: AccountsService, private router: Router) { }

  users: User[] = [];
  selectedUser: User;

  ngOnInit(): void {
    this.accountsService.getUsers().subscribe(users => {
      if (users && users.length > 0) {
        this.users = users;
      }
    });
  }

  userSelected(user: User) {
    if (user && user.id) {
      this.router.navigateByUrl(`comments/${user.id}`);
    }
  }

  

}
