import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  }
}
