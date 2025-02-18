import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Product2Component } from "../product2/product2.component";
import { PictureSlideComponent } from "../picture-slide/picture-slide.component";
import { NavbarProductComponent } from "../navbar-product/navbar-product.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-dashboard',
  imports: [ProductComponent, Product2Component, PictureSlideComponent, NavbarProductComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
