import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-login-seller',
  imports: [FormsModule, NavbarComponent],
  templateUrl: './login-seller.component.html',
  styleUrl: './login-seller.component.css'
})
export class LoginSellerComponent {

  sellerObj: any = { email: '', password: '' };
    router = inject(Router);
    http = inject(HttpClient);
  
    constructor() {}
  
    onadminLogin() {
      this.http
        .post('http://localhost:3003/api/login-seller', this.sellerObj)
        .subscribe(
          (res: any) => {
            console.log(res, 'response obj');
  
            console.log('redirecting to add-product page');
            localStorage.setItem('loginAdmin', JSON.stringify(res.seller));
            this.router.navigate(['/add-product']);
  
            alert(res.message); // Show error message from backend
          },
          (error) => {
            alert('Login failed: ' + (error.error?.message || 'Server error'));
          }
        );
    }
}
