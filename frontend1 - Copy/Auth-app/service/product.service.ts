import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  title:string;
  description:string;
  category:string;
  rating:string;
  productId:number;
}


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProductById(productId: number): Product | PromiseLike<Product> {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://fakestoreapi.com/products'; 

  // Use async/await for fetching data
  async getProducts(): Promise<Product[]> {
    try {
      const response = await this.http.get<Product[]>(this.apiUrl).toPromise();
      return response ?? []; 
    } catch (error) {
      console.error('Error fetching products', error);
      return []; 
    }
  }
}
