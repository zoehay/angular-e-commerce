import { Injectable } from '@angular/core';
import { CartProduct } from '../models/cartproduct';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartProductService {
  cartProducts: CartProduct[] = [];
  url = '//localhost:8000/';
  constructor() {}

  async getCart() {
    const response = await fetch(this.url + 'cart/details', {
      credentials: 'include',
    });
    const responseJSON = await response.json();
    console.log(responseJSON.cart);
    return responseJSON.cart ?? [];
  }
}
