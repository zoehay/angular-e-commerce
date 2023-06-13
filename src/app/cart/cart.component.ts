import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartProduct } from '../models/cartproduct';
import { CartProductService } from '../services/cartproduct.service';
import { CartProductComponent } from '../cart-product/cart-product.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartProductComponent],
  template: ` <div class="page-content">
    <section class="product-feed">
      <app-cart-product
        *ngFor="let cartProduct of cartProductList"
        [cartProduct]="cartProduct"
      ></app-cart-product>
    </section>
  </div>`,
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartProductList: CartProduct[] = [];
  cartProductService: CartProductService = inject(CartProductService);

  constructor() {
    this.cartProductService.getCart().then((cartProductList: CartProduct[]) => {
      this.cartProductList = cartProductList;
    });
  }
}
