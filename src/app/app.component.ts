import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: `
    <main>
      <nav>
        <div class="links">
          <a [routerLink]="['/products']"> Products </a>
          <a [routerLink]="['/']"> Home </a>
        </div>
        <a [routerLink]="['/']">
          <header class="brand-name">
            <img
              class="brand-logo"
              src="/assets/logo.png"
              alt="logo"
              aria-hidden="true"
            />
          </header>
        </a>
        <div class="links">
          <a [routerLink]="['/']"> User </a>
        </div>
      </nav>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-e-commerce';
}
