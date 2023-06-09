import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: User | null;
  url = 'http://localhost:8000';

  constructor() {}

  async getUser() {
    const response = await fetch(this.url + '/user', {
      credentials: 'include',
    });
    const responseJSON = await response.json();
    return (this.user = responseJSON.user ?? null);
  }

  async loginUser(email: string, password: string) {
    // perform login and return user
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
}
