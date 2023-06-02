import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'https://e-commerce.zoemhay.com/api/products';

  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
