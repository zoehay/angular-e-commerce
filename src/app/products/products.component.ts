import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  template: `
    <section class="product-feed">
      <app-product [product]="product"></app-product>
    </section>
  `,
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  product: Product = {
    id: 1,
    name: 'banana',
    description: 'squishy',
    price: 2,
  };
}
