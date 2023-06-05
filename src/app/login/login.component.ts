import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  // #TODO: add validators

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: '',
      password: '',
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Email', form.value.email);
  }
}
