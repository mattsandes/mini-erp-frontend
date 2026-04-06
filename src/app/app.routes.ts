import { Routes } from '@angular/router';
import { CreateCustomersComponent } from './modules/mini-erp/pages/create-customers/create-customers.component';
import { CreateProductPageComponent } from './modules/mini-erp/pages/create-product-page/create-product-page.component';
import { CustomersPageComponent } from './modules/mini-erp/pages/customers-page/customers-page.component';
import { HomeComponent } from './modules/mini-erp/pages/home/home.component';
import { ProductsComponent } from './modules/mini-erp/pages/products/products.component';

export const routes: Routes = [
  {
    title: 'Mini-ERP | Homepage', component: HomeComponent, path: ''
  },
  {
    title: 'Mini-ERP | Products Page', component: ProductsComponent, path: 'products'
  },
  {
    title: 'Mini-ERP | Create Products', component: CreateProductPageComponent, path: 'create-products'
  },
  {
    title: 'Mini-ERP | Cusotmers Page', component: CustomersPageComponent, path: 'customers'
  },
  {
    title: 'Mini-ERP | Create Customer Page', component: CreateCustomersComponent, path: 'create-customer'
  }
];
