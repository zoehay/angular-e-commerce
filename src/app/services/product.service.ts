import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = '//localhost:8000/products';

  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.url, {
      credentials: 'include',
    });
    const response = await data.json();
    return response.products ?? [];
  }
}
