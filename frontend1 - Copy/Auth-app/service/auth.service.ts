import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3003/api'; 

  constructor(private http: HttpClient) {}

  getAuthHeaders() {
    const token = localStorage.getItem('authToken');
    return token ? new HttpHeaders({ 'Authorization': `Bearer ${token}` }) : new HttpHeaders();
  }

  registerUser(user: any) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  getProfile() {
    return this.http.get(`${this.apiUrl}/profile`, { headers: this.getAuthHeaders() });
  }

  isLoggeIn(){
    return !localStorage.getItem('authToken');
  }
}
