import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-seller-list',
  imports: [FormsModule,CommonModule],
  templateUrl: './all-seller-list.component.html',
  styleUrl: './all-seller-list.component.css'
})
export class AllSellerListComponent {

  sellerList: any[] = [];
    name: string = '';
    email: string = '';
    password: string = '';
    licenceNo:string='';
    address:string='';
    mobNo:string='';
    id:string='';
  
    constructor(private http:HttpClient){}
  
    getSeller(){
  
      this.http.get<any[]>("http://localhost:3003/api/sellers").subscribe((result) => {
        this.sellerList = result;  // result is typed as any[], so it matches userList's type
      });
    }
  
    onSubmit() {
      const newSeller = {
        name: this.name,
        email: this.email,
        password: this.password,
        licenceNo:this.licenceNo,
        address:this.address,
        mobNo:this.mobNo,
        id:this.id
      };
  
      console.log("Submitted Data:", newSeller);
    } 

}
