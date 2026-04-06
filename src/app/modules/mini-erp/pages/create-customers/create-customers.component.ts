import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from '../../components/header/header.component';
import { ICreateCostumers } from '../../interfaces/customers/ICreateCostumers';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-create-customers',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HeaderComponent
  ],
  templateUrl: './create-customers.component.html',
  styleUrl: './create-customers.component.scss'
})
export class CreateCustomersComponent {

  constructor(private service: ClientService) {}

  public customerGroup = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    cpf: new FormControl('', { nonNullable: true , validators: [Validators.required]}),
    telefone: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    type: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    observations: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  })

  public createCustomer(): void {
    const customerData = this.customerGroup.getRawValue();

    var customer: ICreateCostumers = {
      name: customerData.name,
      cpf: customerData.cpf,
      type: customerData.type,
      email: customerData.email,
      observations: customerData.observations,
      telefone: customerData.telefone
    };

    if(this.customerGroup.invalid) {
      this.customerGroup.markAllAsTouched();
    }

    this.service.createCustomers(customer).subscribe(
      {
        next: (data) => {
          alert(`Cliente ${data.name} criado com sucesso`);

          console.log('Cliente cadastrado com sucesso', data);

          this.customerGroup.reset();
        },
        error: (error) => console.log(error),
        complete: () => console.log('Requisição finalizada')
      }
    )
  }
}
