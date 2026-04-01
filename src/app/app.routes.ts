import { Routes } from '@angular/router';
import { HomeComponent } from './modules/mini-erp/pages/home/home.component';
import { ProductsComponent } from './modules/mini-erp/pages/products/products.component';

export const routes: Routes = [
  {
    title: 'Homepage', component: HomeComponent, path: ''
  },
  {
    title: 'Products Page', component: ProductsComponent, path: 'products'
  }
];
