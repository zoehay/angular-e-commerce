import { Product } from './product';

export interface CartProduct {
  product: Product;
  productId: number;
  quantity: number;
  userId: number;
}
