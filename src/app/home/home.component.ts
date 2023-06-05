import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>Welcome to the store! It will be the same but better!</p> `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
