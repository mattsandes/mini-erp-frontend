import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { IProducts } from '../../interfaces/products/IProducts';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-productchart',
  standalone: true,
  imports: [
    BaseChartDirective
  ],
  template:
  `
    <canvas
      baseChart
      [data]="barChartData"
      [options]="barChartOptions"
      [type]="barChartType">
    </canvas>
  `
})
export class ProductchartComponent implements OnInit {

  public barChartType: 'bar' = 'bar';

  constructor(private service: ProductService) {}

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Produtos Cadastrados por unidade'
      }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false
  }

  ngOnInit(): void {
    this.loadCharData();
  }

  public loadCharData(): void {
    this.service.getAllProducts().subscribe({
      next: (products) => {
        this.buiildCharData(products);
      }
    })
  }

  public buiildCharData(products: IProducts[]): void {
    const groupedByUnit = new Map<string, number>();

    products.forEach((products) => {
      const currentValue = groupedByUnit.get(products.unit) ?? 0;

      groupedByUnit.set(products.unit, currentValue + 1);
    });

    this.barChartData = {
      labels: Array.from(groupedByUnit.keys()),
      datasets: [
        {
          data: Array.from(groupedByUnit.values()),
          label: 'Produtos cadastrads por unidade'
        }
      ]
    };
  }

}
