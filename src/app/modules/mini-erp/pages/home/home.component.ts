import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductchartComponent } from '../../components/productchart/productchart.component';
import { IProducts } from '../../interfaces/products/IProducts';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductchartComponent,
    MatCardModule,
    HeaderComponent,
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public products: IProducts[] = [];
  constructor(private service: ProductService) {}

  ngOnInit(): void {
      this.service.getAllProducts().subscribe({
        next: (data) => this.products = data,
        error: (error) => console.log(error),
        complete: () => console.log("Request finished")
      })
  }
}
