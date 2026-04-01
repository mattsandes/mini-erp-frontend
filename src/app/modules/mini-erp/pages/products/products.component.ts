import { Component, OnInit } from '@angular/core';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from '../../components/header/header.component';
import { PRODUCT_COLUMNS } from '../../configs/product-table.columns';
import { IProducts } from '../../interfaces/IProducts';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatTableModule,
    MatGridList,
    HeaderComponent,
    MatGridTile
],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  protected displayedColumns = PRODUCT_COLUMNS;
  protected products: IProducts[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getAllProducts().subscribe({
      next: (data) => this.products = data,
      error: (error) => console.error(error),
      complete: () => console.log("REquest concluida com sucesso!")
    });
  }
}
