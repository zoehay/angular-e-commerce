import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-e-commerce';
  user!: User | null;
  userService: UserService = inject(UserService);
  userSubscription!: Subscription;

  constructor(private router: Router) {}

  async ngOnInit() {
    this.userSubscription = this.userService
      .userListener()
      .subscribe((user) => {
        this.user = user;
      });
    this.user = await this.userService.getUser();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async logout() {
    console.log('logout');
    await this.userService.logoutUser();
    this.user = await this.userService.getUser();
    this.router.navigate(['auth/login']);
  }
}
