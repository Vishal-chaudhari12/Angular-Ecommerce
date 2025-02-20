import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NavbarLogoutComponent } from "../navbar-logout/navbar-logout.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule, NavbarLogoutComponent]
})
export class RegisterComponent {
  user = { name: '', email: '', password: '', conformpassword: '' };
  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (!this.user.name || !this.user.email || !this.user.password) {
      Swal.fire('Error', 'Please fill out all fields.', 'error');
      return;
    }

    if (this.user.password !== this.user.conformpassword) {
      Swal.fire('Error', 'Passwords do not match!', 'error');
      return;
    }

    if (this.user.name.length > 10) {
      Swal.fire('Error', 'Name should be at most 10 characters long.', 'error');
      return;
    }

    if (!this.user.email.includes('@')) {
      Swal.fire('Error', 'Please enter a valid email address.', 'error');
      return;
    }

    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{4,}$/;
    if (!passwordRegex.test(this.user.password)) {
      Swal.fire(
        'Error',
        'Password must be at least 4 characters long and include at least 1 number and 1 special character (!@#$%^&*).',
        'error'
      );
      return;
    }

    this.loading = true;
    Swal.fire({
      title: 'Registering...',
      text: 'Please wait while we create your account',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    this.authService.registerUser(this.user).subscribe(
      (response: any) => {
        Swal.close();
        Swal.fire({
          title: 'Registration Successful!',
          text: 'You have been registered successfully.',
          icon: 'success',
          timer: 3000,
          showConfirmButton: false
        });
        this.router.navigate(['/login']);
      },
      (error: any) => {
        Swal.close();
        Swal.fire('Error', error.error?.message || 'An error occurred while registering.', 'error');
      },
      () => {
        this.loading = false;
      }
    );
  }
}
