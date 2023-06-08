import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="profile">
    <h2>Profile Details</h2>
    <div class="profile-content">
      <div class="profile-field">
        <div class="field-name">EMAIL</div>
        <div class="field-value">
          {{ user?.email }}
        </div>
      </div>

      <div class="profile-field">
        <div class="field-name">EMAIL</div>
        <div class="field-value">
          {{ user?.email }}
        </div>
      </div>

      <div class="profile-field">
        <div class="field-name">EMAIL</div>
        <div class="field-value">
          {{ user?.email }}
        </div>
      </div>
    </div>
  </div>`,
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user?: User = undefined;
  userService: UserService = inject(UserService);

  constructor() {
    this.user = this.userService.getUser();
  }
}
