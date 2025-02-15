import { Component } from '@angular/core';
import { ForgetPasswordService } from '../../../service/forget-password.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  imports: [FormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {

  email: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  message: string = '';
  loading: boolean = false;

  constructor(private forgotPasswordService: ForgetPasswordService) {}

  onResetPassword() {
    if (!this.email || !this.newPassword || !this.confirmPassword) {
     alert( this.message = 'All fields are required!');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      alert(this.message = 'Passwords and Conform pass do not match!');
      return;
    }

    this.loading = true;
    this.forgotPasswordService.resetPassword(this.email, this.newPassword, this.confirmPassword).subscribe(
      (response: any) => {
        alert("Password reset successfully! You can now log in.");
        this.message = 'Password changed successfully!';
        this.email = '';
        this.newPassword = '';
        this.confirmPassword = '';
      },
      (error: any) => {
        this.message = error.error.message || 'Error resetting password.';
        
      },
      () => {
        this.loading = false;
      }
    );
  }
}
