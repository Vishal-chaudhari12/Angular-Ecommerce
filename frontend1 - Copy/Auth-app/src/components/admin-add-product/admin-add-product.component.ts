import { Component, OnInit } from '@angular/core';
import { Product2, Product2Service } from '../../../service/product2.service';

@Component({
  selector: 'app-admin-add-product',
  imports: [],
  templateUrl: './admin-add-product.component.html',
  styleUrl: './admin-add-product.component.css'
})
export class AdminAddProductComponent {

  // allProducts: Product2[] = [];

  // constructor(private productService: Product2Service) {}

  // ngOnInit() {
  //   this.loadProducts();
  // }

  // loadProducts() {
  //   this.productService.getAllProducts().subscribe(
  //     (products) => {
  //       this.allProducts = products;
  //     },
  //     (error) => {
  //       console.error('Error fetching products', error);
  //     }
  //   );
  // }
}
