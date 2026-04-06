import { Component, OnInit } from '@angular/core';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HeaderComponent } from '../../components/header/header.component';
import { CUSTOMER_COLUMNS } from '../../configs/customer-table.columns';
import { ICustomers } from '../../interfaces/customers/ICustomers';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-customers-page',
  standalone: true,
  imports: [
    MatTableModule,
    HeaderComponent,
    MatFormField,
    MatLabel,
    MatInput
],
  templateUrl: './customers-page.component.html',
  styleUrl: './customers-page.component.scss'
})
export class CustomersPageComponent implements OnInit {

  dataSource = new MatTableDataSource<ICustomers>([]);
  protected displayedColumns = CUSTOMER_COLUMNS;
  public customers: ICustomers[] = [];
  constructor(private service: ClientService) {}

  ngOnInit(): void {
    this.service.getAllCustomers().subscribe({
      next: (data) => {
        this.customers = data;
        this.dataSource.data = data;
      },
      error: (error) => console.log(error),
      complete: () => console.log("Requisição finalizada com sucesso")
    });
  }

  public applyFilters(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
