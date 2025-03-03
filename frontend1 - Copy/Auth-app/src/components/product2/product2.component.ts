import { Component } from '@angular/core';
import { Product2, Product2Service } from '../../../service/product2.service';
import { CardService } from '../../../service/card.service';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../../../service/product.service';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product2',
  imports: [FormsModule],
  templateUrl: './product2.component.html',
  styleUrl: './product2.component.css'
})
export class Product2Component {

  products2: Product2[] = [];
 
  Product2: any;
  productIdToDelete: undefined;
  
    constructor(private product2Service: Product2Service,
      private cartService: CardService
      ,private router: Router
    ) {}
  
    ngOnInit(): void {
      this.loadProducts(); // Call async method from ngOnInit
    }
  
    async loadProducts(): Promise<void> {
      try {
       
        this.products2 = await this.product2Service.getProducts();
      } catch (error) {
        console.error('Error in fetching products', error);
       
      }
    }
  
    addToCart(product2: Product2) {
      const product: Product = {
        // Ensure Product2 has an `id`
        name: product2.productName,
        image: product2.productImg,
        price: product2.productPrice,
        productId:product2.productId,
        
        id: 0,
        title: '',
        description: '',
        category: '',
        rating: ''
    
      };
    
      this.cartService.addToCart(product);
      alert('Product added to cart!');
    }

    goToCart(): void {
      this.router.navigate(['/cart']); // Example route navigation
    }


    

    

}
