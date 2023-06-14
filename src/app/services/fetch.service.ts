import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  constructor() {}
  url = 'http://localhost:8000';

  async get(endpoint: string) {
    try {
      const response = await fetch(this.url + endpoint, {
        credentials: 'include',
      });
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      console.log(error);
    }
  }

  async postBody(endpoint: string, body: BodyInit | null | undefined) {
    try {
      const response = await fetch(this.url + endpoint, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      console.log(error);
    }
  }

  async postNoBody(endpoint: string) {
    try {
      const response = await fetch(this.url + endpoint, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      console.log(error);
    }
  }
}
