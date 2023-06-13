import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  template: `
    <div class="form-page">
      <h2>Account Login</h2>
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit(loginForm)">
        <div class="form-field">
          <label for="email">Email</label>
          <input id="email" type="text" formControlName="email" />
        </div>
        <div class="form-field">
          <label for="password">Password</label>
          <input id="password" type="password" formControlName="password" />
        </div>
        <div class="form-field">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  userService: UserService = inject(UserService);
  user!: User | null;

  constructor(private fb: FormBuilder, private router: Router) {}

  // #TODO: add validators

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: '',
      password: '',
    });
    this.user = this.userService.user;
  }

  async onSubmit(form: FormGroup) {
    console.log('Email', form.value.email);
    await this.userService.loginUser(form.value.email, form.value.password);
    this.user = await this.userService.getUser();
    this.userService.emitUser(this.user);
    if (this.user) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['auth/login']);
    }
  }
}
