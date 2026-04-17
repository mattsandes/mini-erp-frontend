import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ICustomers } from '../../interfaces/customers/ICustomers';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clientcharts',
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
  `,
})
export class ClientchartsComponent {

  public barChartType: 'bar' = 'bar';

    constructor(private service: ClientService) {}

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
      this.service.getAllCustomers().subscribe({
        next: (clients) => {
          this.buiildCharData(clients);
        }
      })
    }

    public buiildCharData(customers: ICustomers[]): void {
      const groupedByType = new Map<string, number>();

      customers.forEach((customers) => {
        const currentValue = groupedByType.get(customers.type) ?? 0;

        groupedByType.set(customers.type, currentValue + 1);
      });

      this.barChartData = {
        labels: Array.from(groupedByType.keys()),
        datasets: [
          {
            data: Array.from(groupedByType.values()),
            label: 'Clientes cadastrados por tipo'
          }
        ]
      };
    }
}
