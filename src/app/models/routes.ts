import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { CartComponent } from '../cart/cart.component';
import { RegisterComponent } from '../register/register.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Shop',
  },
  {
    path: 'auth/login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'user',
    component: ProfileComponent,
    title: 'Profile',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart',
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
    title: 'Register',
  },
];

export default routeConfig;
