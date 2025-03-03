import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { UserComponent } from '../components/user/user.component';
import { RegisterComponent } from '../components/register/register.component';
import { ProductComponent } from '../components/product/product.component';
import { FoterComponent } from '../components/foter/foter.component';
import { CartComponent } from '../components/cart/cart.component';
import { PictureSlideComponent } from '../components/picture-slide/picture-slide.component';
import { Product2Component } from '../components/product2/product2.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { NavbarProductComponent } from '../components/navbar-product/navbar-product.component';
import { AddProductComponent } from '../components/add-product/add-product.component';
import { AdminComponent } from '../components/admin/admin.component';
import { AdminLoginComponent } from '../components/admin-login/admin-login.component';
import { ForgetPasswordComponent } from '../components/forget-password/forget-password.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { RegisterSellerComponent } from '../components/register-seller/register-seller.component';
import { AdminDashboardComponent } from '../components/admin-dashboard/admin-dashboard.component';
import { LoginSellerComponent } from '../components/login-seller/login-seller.component';
import { SellerAddProductComponent } from '../components/seller-add-product/seller-add-product.component';
import { AdminAddProductComponent } from '../components/admin-add-product/admin-add-product.component';
import { AllSellerListComponent } from '../components/all-seller-list/all-seller-list.component';
import { DeleteProductComponent } from '../components/delete-product/delete-product.component';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product', component: ProductComponent },
  { path: 'footer', component: FoterComponent },
  { path: 'cards', component: CartComponent },
  { path: 'slider', component: PictureSlideComponent },
  { path: 'product2', component: Product2Component },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'navbarproduct', component: NavbarProductComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'forget-pass', component: ForgetPasswordComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register-seller', component: RegisterSellerComponent },
  { path: 'admindash', component: AdminDashboardComponent },
  { path: 'seller-login', component: LoginSellerComponent },
  {path:'seller-product', component:SellerAddProductComponent},
  // {path:'admin-product',component:AdminAddProductComponent},
  // { path: '**', redirectTo: 'admin-login', pathMatch: 'full' },
  {path:"list-seller", component:AllSellerListComponent},
  {path:'delete-product', component:DeleteProductComponent}
  
];
