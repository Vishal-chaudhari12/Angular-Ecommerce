import { Injectable } from '@angular/core';
import { Product } from './product.service';
import { BehaviorSubject } from 'rxjs';
import { Product2 } from './product2.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  private cart: Product[] = [];
  private cart1:Product2[]=[];
  private cartSubject = new BehaviorSubject<Product[]>([]);
  private cartSubject1 = new BehaviorSubject<Product2[]>([]);
  

  getCart() {
    return this.cartSubject.asObservable(); // Observable to track cart updates
  }

  addToCart(product: Product) {
    this.cart.push(product);
    this.cartSubject.next(this.cart); // Notify subscribers
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(product => product.id !== productId);
    this.cartSubject.next(this.cart); // Update cart
  }

  removeFromCart1(productId: number) {
    this.cart = this.cart.filter(product2 => product2.id !== productId);
    this.cartSubject.next(this.cart); // Update cart
  }
}
