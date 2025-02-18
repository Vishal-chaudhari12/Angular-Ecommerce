import { Injectable } from '@angular/core';
import { SellerModel } from '../model/seller';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
saveAdmin(sellerObj: SellerModel) {
    throw new Error('Method not implemented.');
  }

   constructor(private http: HttpClient) { }
  
    private apiUrl = 'http://localhost:3003/api/seller'; 
    
  
      saveSeller1(obj : SellerModel):Observable<any>{
       return this.http.post<any>(this.apiUrl,obj)
      }
  
}
