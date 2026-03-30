import { Routes } from '@angular/router';
import { CreateProductComponent } from './modules/mini-erp/pages/create-product/create-product.component';
import { HomeComponent } from './modules/mini-erp/pages/home/home.component';

export const routes: Routes = [
  {
    title: 'Homepage', component: HomeComponent, path: ''
  },
  {
    title: 'Create Product', component: CreateProductComponent, path: 'create-product'
  }
];
