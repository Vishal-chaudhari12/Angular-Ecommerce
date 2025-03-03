import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../model/product';
import { Observable } from 'rxjs';

export interface Product2 {
  productName: string;
  productPrice: number;
  productImg: string;
  title: string;
  productDiscription: string;
  productId:number;
}

@Injectable({
  providedIn: 'root',
})
export class Product2Service {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3003/api/products';
  private apiUrl1 = 'http://localhost:3003/api/product';

  // Use async/await for fetching data
  async getProducts(): Promise<Product2[]> {
    try {
      const response = await this.http.get<Product2[]>(this.apiUrl).toPromise();
      return response ?? [];
    } catch (error) {
      console.error('Error fetching products', error);
      return [];
    }
  }

  // Fetch all products (Admin)
  getAllProducts(): Observable<Product2[]> {
    return this.http.get<Product2[]>(`${this.apiUrl}`);
  }

  // Fetch only the seller's products
  getSellerProducts(sellerId: string): Observable<Product2[]> {
    return this.http.get<Product2[]>(`${this.apiUrl}?sellerId=${sellerId}`);
  }

  saveProduct(obj: ProductModel): Observable<any> {
    return this.http.post<any>(this.apiUrl1, obj);
  }

  deleteProduct(productId: number): Promise<any> {
    return this.http.delete<any>(`${this.apiUrl1}/${productId}`).toPromise();
  }
}
