import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';

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
];

export default routeConfig;
