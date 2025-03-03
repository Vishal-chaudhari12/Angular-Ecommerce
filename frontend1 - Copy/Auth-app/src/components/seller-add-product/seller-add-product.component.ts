import { Component, OnInit } from '@angular/core';
import { Product2, Product2Service } from '../../../service/product2.service';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent  {

  sellerProducts: Product2[] = [];
  sellerId: string = '';

  constructor(private productService: Product2Service, private authService: AuthService) {}

  ngOnInit() {
    if (this.sellerId) {
      this.loadProducts();
    } else {
      console.error("Seller ID is missing");
    }
  }

  loadProducts() {
    this.productService.getSellerProducts(this.sellerId).subscribe(
      (products) => {
        this.sellerProducts = products;
      },
      (error) => {
        console.error('Error fetching seller products', error);
      }
    );
  }
}
