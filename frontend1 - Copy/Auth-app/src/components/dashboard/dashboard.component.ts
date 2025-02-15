import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Product2Component } from "../product2/product2.component";
import { PictureSlideComponent } from "../picture-slide/picture-slide.component";
import { NavbarProductComponent } from "../navbar-product/navbar-product.component";

@Component({
  selector: 'app-dashboard',
  imports: [ProductComponent, Product2Component, PictureSlideComponent, NavbarProductComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
