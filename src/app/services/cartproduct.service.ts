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
    return responseJSON.cart ?? [];
  }

  async incrementCartProductQuantity(userId: number, productId: number) {
    const body = JSON.stringify({
      userId: userId,
      productId: productId,
    });
    const response = await fetch(this.url + 'cart', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    });
    const responseJSON = await response.json();
    return responseJSON ?? null;
  }
}
