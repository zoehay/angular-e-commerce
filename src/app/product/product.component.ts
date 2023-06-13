import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="product-tile">
      <h2 class="product-name">{{ product.name }}</h2>
      <p class="product-description">{{ product.description }}</p>
      <p class="product-price">{{ product.price }}</p>
    </section>
  `,
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product!: Product;
}
