import { Component, inject, OnInit } from '@angular/core';
import { Product2, Product2Service } from '../../../service/product2.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
getProducts() {
throw new Error('Method not implemented.');
}
  products: Product2[] = [];
  productIdToDelete: number | undefined;
   router = inject(Router);
  

  constructor(private productService: Product2Service) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  async loadProducts(): Promise<void> {
    try {
      this.products = await this.productService.getProducts();
    } catch (error) {
      console.error('Error in fetching products', error);
    }
  }

  async deleteProduct(): Promise<void> {
    if (!this.productIdToDelete) {
      alert('Please enter a product ID to delete.');
      return;
    }

    try {
      await this.productService.deleteProduct(this.productIdToDelete);
      alert(`Product with ID ${this.productIdToDelete} deleted successfully.`);
      this.loadProducts(); // Refresh product list
    } catch (error) {
      console.error('Error deleting product', error);
      alert('Failed to delete product.');
    }
  }


   // Navigation methods
   viewSellers(): void {
    this.router.navigateByUrl("/list-seller");
  }

  addProduct(): void {
    this.router.navigateByUrl("/add-product");
  }

  registerSeller(): void {
    this.router.navigateByUrl("/register-seller");
  }

}
function navigateByUrl(arg0: string) {
  throw new Error('Function not implemented.');
}

