import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartProduct } from '../models/cartproduct';
import { CartProductService } from '../services/cartproduct.service';
import { CartProductComponent } from '../cart-product/cart-product.component';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartProductComponent],
  template: ` <div class="page-content">
    <div
      class="cart-content"
      *ngIf="cartProductCount !== 0; then thenBlock; else elseBlock"
    ></div>

    <ng-template #thenBlock>
      <app-cart-product
        *ngFor="let cartProduct of cartProductList"
        [cartProduct]="cartProduct"
        (updateEvent)="handleUpdateQuantity($event)"
        [user]="user"
      ></app-cart-product>
      <button (click)="handleClearCart()">Clear Cart</button>
    </ng-template>

    <ng-template #elseBlock>
      <h2>Your cart is empty</h2>
    </ng-template>
  </div>`,
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartProductList: CartProduct[] = [];
  user!: User;
  cartProductCount: number = 0;

  // #TODO: do more research on passing user state
  // Choosing to put user service in Cart component to be consistent with how Products page works

  constructor(
    private cartProductService: CartProductService,
    private userService: UserService
  ) {
    this.getCartProducts();
    this.getUser();
  }

  async getCartProducts() {
    const newCartProducts = await this.cartProductService.getCart();
    this.cartProductList = newCartProducts;
    this.cartProductCount = this.cartProductList.length;
  }

  async getUser() {
    const user = await this.userService.getUser();
    this.user = user;
  }

  handleUpdateQuantity(data: { productId: number; newQuantity: number }) {
    const { productId, newQuantity } = data;
    const newCartProducts = this.cartProductList.map((product) => {
      if (product.productId === productId) {
        return {
          ...product,
          quantity: newQuantity,
        };
      } else {
        return product;
      }
    });
    this.cartProductList = newCartProducts;
    this.cartProductCount = this.cartProductList.length;
  }

  async handleClearCart() {
    const deletedCount = await this.cartProductService.clearCart();
    if (Number(deletedCount) === this.cartProductCount) {
      this.cartProductList = [];
      this.cartProductCount = 0;
    }
  }
}
