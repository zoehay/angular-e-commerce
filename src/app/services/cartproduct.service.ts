import { Injectable } from '@angular/core';
import { CartProduct } from '../models/cartproduct';
import { Product } from '../models/product';
import { FetchService } from './fetch.service';

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

  async incrementCartProductQuantity(userId: number, productId: number) {
    const endpoint = '/cart';
    const body = JSON.stringify({
      userId: userId,
      productId: productId,
    });
    const response = await this.fetchService.postBody(endpoint, body);
    return response ?? null;
  }
}
