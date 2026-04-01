import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { HeaderComponent } from '../../components/header/header.component';
import { IProducts } from '../../interfaces/IProducts';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatGridList,
    HeaderComponent,
    MatGridTile
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
