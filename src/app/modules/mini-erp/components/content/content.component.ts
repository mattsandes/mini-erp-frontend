import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IProducts } from '../../interfaces/IProducts';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {

  protected products: IProducts[] = []
  private productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => this.products = data,
      error: (error) => console.log(error),
      complete: () => console.log("Requisição finalizado com sucesso")
    });
  }


}
