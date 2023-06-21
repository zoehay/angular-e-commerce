import { Injectable } from '@angular/core';
import { CartProduct } from '../models/cartproduct';
import { Product } from '../models/product';
import { FetchService } from './fetch.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class CartProductService {
  cartProducts: CartProduct[] = [];

  constructor(private fetchService: FetchService) {}

  async getCart() {
    const endpoint = '/cart/details';
    const response = await this.fetchService.get(endpoint);
    return response.cart ?? [];
  }

  async clearCart() {
    const endpoint = '/cart';
    const response = await this.fetchService.delete(endpoint);
    return response.count;
  }

  async incrementCartProductQuantity(userId: number, productId: number) {
    const endpoint = '/cart';
    const body = JSON.stringify({
      userId: userId,
      productId: productId,
    });
    const response = await this.fetchService.postBody(endpoint, body);
    return response ?? null;
  }

  async updateCartProductQuantity(
    userId: number,
    productId: number,
    quantity: number
  ) {
    const endpoint = '/cart';
    const body = JSON.stringify({
      userId: userId,
      productId: productId,
      quantity: quantity,
    });
    const response = await this.fetchService.postBody(endpoint, body);
    return response ?? null;
  }
}
