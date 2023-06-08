import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = {
    id: 1,
    email: 'anEmail',
    name: 'aName',
  };

  constructor() {}

  getUser(): User {
    return this.user;
  }
}
