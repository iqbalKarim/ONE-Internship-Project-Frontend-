import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './_service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'E-Commerce';
  users: any;
  products: any;

  constructor(
    private http: HttpClient,
    private productServices: ProductService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productServices.getAllProducts().subscribe(
      (responce) => {
        console.log(responce);
        this.products = responce;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getProducts(category: string) {
    this.productServices.getProducts(category).subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
