import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../interfaces/IProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "http://localhost:8080/api/product";
  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(this.url);
  }
}
