import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { ICreateCostumers } from '../interfaces/customers/ICreateCostumers';
import { ICustomers } from '../interfaces/customers/ICustomers';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  public getAllCustomers(): Observable<ICustomers[]> {
    return this.http.get<ICustomers[]>(`${this.url}/customers`)
  }

  public createCustomers(customer: ICreateCostumers): Observable<ICreateCostumers> {
    return this.http.post<ICreateCostumers>(`${this.url}/customers`, customer);
  }

  public findCustomerById(id: number): Observable<ICustomers> {
    return this.http.get<ICustomers>(`${this.url}/customers/${id}`);
  }
}
