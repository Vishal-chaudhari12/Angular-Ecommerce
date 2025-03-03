import { animate, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarLogoutComponent } from "../navbar-logout/navbar-logout.component";

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule, NavbarLogoutComponent],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
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
          this.router.navigate(['/admindash']);

          alert(res.message); // Show error message from backend
        },
        (error) => {
          alert('Login failed: ' + (error.error?.message || 'Server error'));
        }
      );
  }
}
