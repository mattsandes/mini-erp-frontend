import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PRODUCT_COLUMNS } from '../../configs/product-table.columns';
import { IProducts } from '../../interfaces/IProducts';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    MatTableModule,
    CurrencyPipe
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {

  protected displayedColumns = PRODUCT_COLUMNS;
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
