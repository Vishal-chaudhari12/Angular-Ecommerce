import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'], 
  imports: [FormsModule]
})
export class RegisterComponent {
  user = { name: '', email: '', password: '',conformpassword:'' };
  message: string = '';
  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {

    if (!this.user.name || !this.user.email || !this.user.password) {
     alert( this.message = 'Please fill out all fields.');
      return;
    }

    if (this.user.password !== this.user.conformpassword) {
      alert(this.message = 'Passwords and Conform pass do not match!');
      return;
    }

    if (this.user.name.length > 10) {
      alert(this.message = 'Name should be at least 10 characters long.');
      return;
    }

    if (!this.user.email.includes('@')) {
      alert(this.message = 'Please enter a valid email address with "@" symbol.');
      return;
    }
    
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{4,}$/;
    if (!passwordRegex.test(this.user.password)) {
      alert(this.message = 'Password must be at least 4 characters long, include at least 1 number and 1 special character (!@#$%^&*).');
      return;
    }

    this.loading = true;
    this.authService.registerUser(this.user).subscribe(
      (response: any) => {
        this.message = 'User registered successfully!';
        alert('Registered successfully!');
        // console.log(response);
        this.router.navigate(['/login']);
      },
      (error: any) => {
        alert(this.message = error.error?.message || 'An error occurred while registering.');
        console.error(error);
      },
      () => {
        this.loading = false;
      }
    );
  }
}
