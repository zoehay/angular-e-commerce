import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { Product } from '../product';
import { ProductService } from '../product.service';

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
        ></app-product>
      </section>
    </div>
  `,
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  productList: Product[] = [];
  productService: ProductService = inject(ProductService);

  constructor() {
    this.productService.getAllProducts().then((productList: Product[]) => {
      this.productList = productList;
    });
  }
}
