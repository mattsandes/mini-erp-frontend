import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ICreateProducts } from '../../interfaces/ICreateProducts';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create-product-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-product-form.component.html',
  styleUrl: './create-product-form.component.scss'
})
export class CreateProductFormComponent {

  constructor(private productService: ProductService) {}

  productForm = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      productCode: new FormControl('', [Validators.required]),
      productPrice: new FormControl('', [Validators.required, Validators.min(0.01)]),
      description: new FormControl('', [Validators.required]),
      unit: new FormControl('', [Validators.required])
    }
  );

  public createProduct() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }
    const formValues = this.productForm.getRawValue();

    const product: ICreateProducts = {
      productName: formValues.productName ?? '',
      productCode: formValues.productCode ?? '',
      price: Number(formValues.productPrice),
      description: formValues.description ?? '',
      unit: formValues.unit ?? '',
    }

    this.productService.createProduct(product).subscribe({
      next: (response) => {

        console.log("Produto criado com sucesso: ", product);

        this.productForm.reset()

        alert(`Produto ${response.productCode} criado com sucesso`)
      },
      error: (erro) => console.log("Erro ao criar o produto: ", erro),
      complete: () => console.log("Produto criado com sucesso")
    });
  }
}
