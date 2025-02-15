import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from "../components/user/user.component";
import { LoginComponent } from "../components/login/login.component";

import { NavbarComponent } from "../components/navbar/navbar.component";

import { ProductComponent } from "../components/product/product.component";
import { FoterComponent } from "../components/foter/foter.component";

import { CartComponent } from "../components/cart/cart.component";

import { PictureSlideComponent } from "../components/picture-slide/picture-slide.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent, LoginComponent, RouterLink, NavbarComponent,ProductComponent, FoterComponent, CartComponent, PictureSlideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Auth-app';
}
