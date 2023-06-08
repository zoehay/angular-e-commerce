import { Component, inject } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { User } from './user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  template: `
    <main>
      <nav>
        <div class="nav-content">
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
          <div class="links" *ngIf="user; then thenBlock; else elseBlock"></div>
          <ng-template #thenBlock>
            <a [routerLink]="['/user']"> Profile </a>
          </ng-template>
          <ng-template #elseBlock>
            <a [routerLink]="['/auth/login']"> User </a>
          </ng-template>
        </div>
      </nav>
      <section class="page-content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-e-commerce';
  user?: User = undefined;
  userService: UserService = inject(UserService);

  constructor() {
    this.user = this.userService.getUser();
  }
}
