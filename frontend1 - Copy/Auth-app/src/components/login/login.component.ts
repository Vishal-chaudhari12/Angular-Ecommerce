import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userobj: any = { email: '', password: '' };
  router = inject(Router);
  http = inject(HttpClient);

  constructor() {}

  onLogin() {
    Swal.fire({
      title: 'Logging in...',
      text: 'Please wait while we verify your credentials',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    this.http.post('http://localhost:3003/api/login', this.userobj).subscribe(
      (res: any) => {
        Swal.close();
        console.log(res, "response obj");

        // Save token & user data
        localStorage.setItem('authToken', res.token);
        localStorage.setItem('loginUser', JSON.stringify(res.login));

        Swal.fire({
          title: 'Login Successful!',
          text: res.message,
          icon: 'success',
          timer: 4000,
          showConfirmButton: false
        });

        this.router.navigateByUrl("/dashboard");
      },
      (error) => {
        Swal.close();
        Swal.fire({
          title: 'Login Failed',
          text: error.error?.message || 'Server error',
          icon: 'error',
          confirmButtonText: 'Try Again'
        });
      }
    );
  }
}
