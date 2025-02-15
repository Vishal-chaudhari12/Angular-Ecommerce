import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
})
export class AdminLoginComponent {
  adminObj: any = { email: '', password: '' };
  router = inject(Router);
  http = inject(HttpClient);

  constructor() {}

  onadminLogin() {
    this.http
      .post('http://localhost:3003/api/login-admin', this.adminObj)
      .subscribe(
        (res: any) => {
          console.log(res, 'response obj');

          console.log('redirecting to add-product page');
          localStorage.setItem('loginAdmin', JSON.stringify(res.admin));
          this.router.navigate(['/add-product']);

          alert(res.message); // Show error message from backend
        },
        (error) => {
          alert('Login failed: ' + (error.error?.message || 'Server error'));
        }
      );
  }
}
