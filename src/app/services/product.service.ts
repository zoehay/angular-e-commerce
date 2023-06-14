import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { FetchService } from './fetch.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private fetchService: FetchService) {}

  async getAllProducts(): Promise<Product[]> {
    const endpoint = '/products';
    const response = await this.fetchService.get(endpoint);
    return response.products ?? [];
  }
}
