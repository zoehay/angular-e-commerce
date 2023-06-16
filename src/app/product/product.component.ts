import {
  Component,
  Input,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { User } from '../models/user';
import { Router, RouterModule } from '@angular/router';
import { CartProductService } from '../services/cartproduct.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="product-tile">
      <h2 class="product-name">{{ product.name }}</h2>
      <p class="product-description">{{ product.description }}</p>
      <p class="product-price">{{ product.price }}</p>
      <div class="links" *ngIf="user; then thenBlock; else elseBlock"></div>
      <ng-template #thenBlock>
        <button (click)="addToCart()">Add to Cart</button>
      </ng-template>
      <ng-template #elseBlock>
        <a class="login-route" [routerLink]="['/auth/login']"> Login to Add</a>
      </ng-template>
    </div>
  `,
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product!: Product;
  @Input() user?: User | null;

  constructor(
    private router: Router,
    private cartProductService: CartProductService
  ) {}

  async addToCart() {
    const addedProduct =
      await this.cartProductService.incrementCartProductQuantity(
        this.user!.id,
        this.product.id
      );
    return addedProduct;
  }
}
