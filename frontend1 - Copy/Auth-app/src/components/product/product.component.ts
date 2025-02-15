import { Component, inject, OnInit } from '@angular/core';
import { Product, ProductService } from '../../../service/product.service';
import { CardService } from '../../../service/card.service';
import { PictureSlideComponent } from "../picture-slide/picture-slide.component";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product',
  imports: [PictureSlideComponent ,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService,
    private cartService: CardService
  ) {}

  ngOnInit(): void {
    this.loadProducts(); // Call async method from ngOnInit
  }

  async loadProducts(): Promise<void> {
    try {
     
      this.products = await this.productService.getProducts();
    } catch (error) {
      console.error('Error in fetching products', error);
     
    }
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert('Product added to cart!');
  }
}
