import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  private apiUrl = 'http://localhost:3003/api/forgot-password';

  constructor(private http: HttpClient) {}

  resetPassword(email: string, newPassword: string, confirmPassword: string): Observable<any> {
    return this.http.post(this.apiUrl, { email, newPassword, confirmPassword });
  }
}
