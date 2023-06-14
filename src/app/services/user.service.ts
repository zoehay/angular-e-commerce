import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';
import { FetchService } from './fetch.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: User | null;
  url = 'http://localhost:8000';

  private userEvent = new BehaviorSubject<User | null>(null);

  constructor(private fetchService: FetchService) {}

  emitUser(user: User | null) {
    this.userEvent.next(user);
  }

  userListener() {
    return this.userEvent.asObservable();
  }

  // #TODO: fix multiple get user
  async getUser() {
    const endpoint = '/user';
    const response = await this.fetchService.get(endpoint);
    return (this.user = response.user ?? null);
  }

  // #TODO: add useful return error messages

  async loginUser(email: string, password: string) {
    const endpoint = '/auth/login';
    const body = JSON.stringify({ email: email, password: password });
    const response = await this.fetchService.postBody(endpoint, body);
    return (this.user = response.user ?? null);
  }

  async logoutUser() {
    const endpoint = '/auth/logout';
    const response = await this.fetchService.postNoBody(endpoint);
    if (response.message === 'User logged out') {
      return (this.user = null);
    } else {
      return;
    }
  }

  async registerUser(email: string, name: string, password: string) {
    const endpoint = '/auth/register';
    const body = JSON.stringify({
      email: email,
      userName: name,
      password: password,
    });
    const response = await this.fetchService.postBody(endpoint, body);
    if (response.user.email === email) {
      return await this.loginUser(email, password);
    } else {
      return;
    }
  }
}
