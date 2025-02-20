import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product2, Product2Service } from '../../../service/product2.service';
import { ProductModel } from '../../../model/product';
import { CardService } from '../../../service/card.service';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-add-product',
  imports: [FormsModule, NavbarComponent],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  products2: Product2[] = [];
  productObj: ProductModel = new ProductModel();
  Product2: any;

  constructor(
    private product2Service: Product2Service,
    private cartService: CardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts(); // Call async method from ngOnInit
  }
  loadProducts() {
    throw new Error('Method not implemented.');
  }
  onSaveProduct(): void {
    this.product2Service.saveProduct(this.productObj).subscribe(
      (result: any) => {
        if (result.result) {
          alert('Product Saved Successfully');
          this.loadProducts(); // Refresh product list after saving
        } else {
          alert(result.message);
        }
      },
      (error) => {
        console.error('Error saving product', error);
        alert('Failed to save product');
      }
    );
  }
}
