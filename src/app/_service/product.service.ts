import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {}

  getProducts(category: string) {
    return this.http.get(this.baseUrl + 'product/' + category);
  }
  getAllProducts() {
    return this.http.get(this.baseUrl + 'product/allproducts');
  }
}
