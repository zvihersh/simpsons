import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private httpClient: HttpClient) { }

  users: User[];

  getUsers(): Observable<User[]> {
    if (this.users) {
      return of(this.users);
    }
    return this.httpClient.get<User[]>('assets/data/users.json');
  }
}
