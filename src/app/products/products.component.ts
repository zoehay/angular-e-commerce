import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  template: `
    <div class="page-content">
      <section class="product-feed">
        <app-product
          *ngFor="let product of productsList"
          [product]="product"
        ></app-product>
      </section>
    </div>
  `,
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  productsList: Product[] = [
    {
      id: 1,
      name: 'Shovel',
      description: "It's like a big spoon for dirt and stuff.",
      price: 9.0,
    },
    {
      id: 1,
      name: 'Bug Net',
      description: 'Catch those creepy crawlies.',
      price: 11.0,
    },
    {
      id: 1,
      name: 'Fishing Rod',
      description: 'A rod used for fishing and the like.',
      price: 12.6,
    },
    {
      id: 1,
      name: 'BBQ',
      description: 'Throw some stuff on this. It will then cook..',
      price: 340.0,
    },
    {
      id: 1,
      name: 'Basic Axe',
      description: 'Chop down trees and plants..',
      price: 10.0,
    },
    { id: 1, name: 'Bananas', description: 'Squishy', price: 4.96 },
    { id: 1, name: 'Bush Lime', description: 'Sour but yummy.', price: 1.8 },
    {
      id: 1,
      name: 'Torch',
      description: "This isn't a flashlight... its a torch!",
      price: 60.0,
    },
    {
      id: 1,
      name: 'Wheelbarrow',
      description: 'Fill it with dirt or other stuff.',
      price: 300.0,
    },
    {
      id: 1,
      name: 'Table Saw',
      description: 'Can cut wood into planks.',
      price: 52.0,
    },
  ];
}
