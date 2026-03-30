import { Component } from '@angular/core';
import { CreateProductFormComponent } from '../../components/create-product-form/create-product-form.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    HeaderComponent,
    CreateProductFormComponent
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {

}
