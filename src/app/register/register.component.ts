import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  template: `
    <div class="form-page">
      <h2>Create New Account</h2>
      <form
        [formGroup]="registerForm"
        (ngSubmit)="onSubmit(registerForm)"
        class="app-form"
      >
        <div class="form-field">
          <label for="email">Email</label>
          <input id="email" type="text" formControlName="email" />
        </div>
        <div class="form-field">
          <label for="name">Name</label>
          <input id="name" type="text" formControlName="name" />
        </div>
        <div class="form-field">
          <label for="password">Password</label>
          <input id="password" type="password" formControlName="password" />
        </div>
        <div class="form-field">
          <button type="submit">Submit</button>
        </div>
      </form>
      <a class="login-link" [routerLink]="['/auth/login']"> User Login</a>
    </div>
  `,
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm!: FormGroup;
  userService: UserService = inject(UserService);
  user!: User | null;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: '',
      name: '',
      password: '',
    });
    this.user = this.userService.user;
  }

  async onSubmit(form: FormGroup) {
    const newUser = await this.userService.registerUser(
      form.value.email,
      form.value.name,
      form.value.password
    );
    this.user = await this.userService.getUser();
    this.userService.emitUser(this.user);
    if (this.user) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['auth/login']);
    }
  }
}
