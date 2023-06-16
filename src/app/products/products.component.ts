import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  template: `
    <div class="page-content">
      <section class="product-feed">
        <app-product
          *ngFor="let product of productList"
          [product]="product"
          [user]="user"
        ></app-product>
      </section>
    </div>
  `,
  styleUrls: ['./products.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  productList: Product[] = [];
  user?: User | null;

  constructor(
    private productService: ProductService,
    private userService: UserService
  ) {
    this.getProducts();
  }

  async ngOnInit() {
    this.user = await this.userService.getUser();
  }

  async getProducts() {
    const newProducts = await this.productService.getAllProducts();
    this.productList = newProducts;
  }
}
