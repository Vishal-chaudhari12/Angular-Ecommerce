import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../../service/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const productId = +params['id'];
      this.product = await this.productService.getProductById(productId);
    });
  }
 
}
