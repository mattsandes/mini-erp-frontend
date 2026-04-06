import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from '../../components/header/header.component';
import { ICreateProducts } from '../../interfaces/products/ICreateProducts';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create-product-page',
  standalone: true,
  imports: [
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    HeaderComponent,
  ],
  templateUrl: './create-product-page.component.html',
  styleUrl: './create-product-page.component.scss'
})
export class CreateProductPageComponent {

  public productForm = new FormGroup({
    productName: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    productCode: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    price: new FormControl([Validators.required, Validators.min(0.01)]),
    description: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    unit: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] })
  });
  constructor(private service: ProductService) {}

  public createProduct(): void {

    if(this.productForm.invalid) {
      this.productForm.markAllAsTouched();
    }

    const formValue = this.productForm.getRawValue();

    const payload: ICreateProducts = {
      productName: formValue.productName,
      description: formValue.description,
      price: Number(formValue.price),
      productCode: formValue.productCode,
      unit: formValue.unit
    }

    this.service.createProduct(payload).subscribe({
      next: (data) => {
        console.log('Produto criado com sucesso: ', payload);

        this.productForm.reset();

        alert(`Produto ${data.productCode} criado com sucesso`)
      },
      error: (erro) => console.log(erro),
      complete: () => console.log("Requisição completa com sucesso")
    })
  }

}
