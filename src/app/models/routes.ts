import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Products page',
  },
  {
    path: 'auth/login',
    component: LoginComponent,
    title: 'Login page',
  },
  {
    path: 'user',
    component: ProfileComponent,
    title: 'User profile page',
  },
];

export default routeConfig;
