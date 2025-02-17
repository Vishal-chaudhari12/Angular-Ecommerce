import { Component, OnInit, TrackByFunction } from '@angular/core';
import { Product } from '../../../service/product.service';
import { CommonModule } from '@angular/common';
import { CardService } from '../../../service/card.service';
import { Router } from '@angular/router';
import { FormsModule, NgModelGroup } from '@angular/forms';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: { product: Product; quantity: number }[] = [];
  totalAmount: number = 0;
  trackById: TrackByFunction<{ product: Product; quantity: number }> = (index, item) => item.product.id;
 // trackById1: TrackByFunction<{ product1: Product2; quantity: number }> = (index, item) => item.product1.title;

  constructor(private cartService: CardService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe((items) => {
      this.cartItems = items.map((product) => ({ product, quantity: 1 }));
      this.calculateTotal();
    });
  }

  // Update quantity of product
  updateQuantity(productId: number, quantity: number) {
    const item = this.cartItems.find((i) => i.product.id === productId);
    if (item) {
      item.quantity = quantity;
      this.calculateTotal();
    }
  }

  // Remove product from cart
  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter((item) => item.product.id !== productId);
    this.cartService.removeFromCart(productId);
    this.calculateTotal();
  }
  

  // Calculate total amount
  calculateTotal() {
    this.totalAmount = this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  // Navigate to payment page
  goToPayment() {
    this.router.navigate([''], { state: { totalAmount: this.totalAmount } });
  }
}
