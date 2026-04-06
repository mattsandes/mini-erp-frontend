import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { ICreateProducts } from '../interfaces/products/ICreateProducts';
import { IProducts } from '../interfaces/products/IProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(`${this.url}/product`);
  }

  public createProduct(data: ICreateProducts): Observable<ICreateProducts> {
    return this.http.post<ICreateProducts>(`${this.url}/product`, data);
  }
}
