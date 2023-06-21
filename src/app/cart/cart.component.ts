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
    <section class="product-feed">
      <app-cart-product
        *ngFor="let cartProduct of cartProductList"
        [cartProduct]="cartProduct"
        (updateEvent)="handleUpdateQuantity($event)"
        [user]="user"
      ></app-cart-product>
    </section>
  </div>`,
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartProductList: CartProduct[] = [];
  user!: User;

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
    console.log(this.cartProductList);
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
  }
}
