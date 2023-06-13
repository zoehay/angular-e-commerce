import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartProduct } from '../models/cartproduct';

@Component({
  selector: 'app-cart-product',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cart-product-tile">
      <div class="product-name">
        {{ cartProduct.product.name }}
      </div>
      <div class="product-info">
        <div class="product-price">Price: {{ cartProduct.product.price }}g</div>
        <div class="product-description">
          {{ cartProduct.product.description }}
        </div>
        <div class="product-quantity">Quantity: {{ cartProduct.quantity }}</div>
      </div>
    </div>
  `,
  styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent {
  @Input() cartProduct!: CartProduct;
}
