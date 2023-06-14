import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: User | null;
  url = 'http://localhost:8000';

  private userEvent = new BehaviorSubject<User | null>(null);

  constructor() {}

  emitUser(user: User | null) {
    this.userEvent.next(user);
  }

  userListener() {
    return this.userEvent.asObservable();
  }

  async getUser() {
    const response = await fetch(this.url + '/user', {
      credentials: 'include',
    });
    const responseJSON = await response.json();
    return (this.user = responseJSON.user ?? null);
  }

  async loginUser(email: string, password: string) {
    const body = JSON.stringify({ email: email, password: password });
    const response = await fetch(this.url + '/auth/login', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    });
    const responseJSON = await response.json();
    return (this.user = responseJSON.user ?? null);
  }

  async logoutUser() {
    const response = await fetch(this.url + '/auth/logout', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJSON = await response.json();
    return (this.user = null);
  }

  async registerUser(email: string, name: string, password: string) {
    const body = JSON.stringify({
      email: email,
      userName: name,
      password: password,
    });
    const response = await fetch(this.url + '/auth/register', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    });
    const responseJSON = await response.json();
    if ((responseJSON.user.email = email)) {
      return await this.loginUser(email, password);
    }
  }
}
