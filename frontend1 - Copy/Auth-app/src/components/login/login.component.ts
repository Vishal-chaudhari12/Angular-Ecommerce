import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    this.http.post('http://localhost:3003/api/login', this.userobj).subscribe(
      (res: any) => {
        console.log(res, "response obj");

        // Save token & user data
        localStorage.setItem('authToken', res.token); 
        localStorage.setItem('loginUser', JSON.stringify(res.login)); 

        alert(res.message);
        this.router.navigateByUrl("/dashboard"); 
      },
      (error) => {
        alert('Login failed: ' + (error.error?.message || 'Server error'));
      }
    );
  }
}
