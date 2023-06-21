import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartProduct } from '../models/cartproduct';
import { CartProductService } from '../services/cartproduct.service';
import { User } from '../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
      <div class="product-set-quantity">
        <input
          id="quantity-input"
          name="quantity"
          type="number"
          min="0"
          value="{{ cartProduct.quantity }}"
          (change)="updateQuantity($event)"
        />
      </div>
    </div>
  `,
  styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent {
  @Input() cartProduct!: CartProduct;
  @Input() handleUpdateQuantity: any;
  @Input() user!: User;
  @Output() updateEvent = new EventEmitter<{
    productId: number;
    newQuantity: number;
  }>();

  // #TODO: do more research on passing user state
  // Choosing to put user input in cartProduct component to be consistent with how product component on the Products page works

  constructor(private cartProductService: CartProductService) {}

  async updateQuantity(event: any) {
    event.preventDefault();
    const newQuantity = Number((event.target as HTMLInputElement).value);
    const productId = this.cartProduct.productId;
    const data = { productId, newQuantity };

    setTimeout(async () => {
      await this.cartProductService.updateCartProductQuantity(
        this.user.id,
        this.cartProduct.productId,
        newQuantity
      );
      await this.updateEvent.emit(data);
    }, 400);
  }
}
