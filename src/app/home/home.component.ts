import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Welcome to the store!</h2>
    <p>Now with Angular! You can make up a user to add products to your cart</p>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
