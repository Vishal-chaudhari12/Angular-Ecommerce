import { Component } from '@angular/core';
import { SellerModel } from '../../../model/seller';
import { SellerService } from '../../../service/seller.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-seller',
  imports: [FormsModule],
  templateUrl: './register-seller.component.html',
  styleUrl: './register-seller.component.css'
})
export class RegisterSellerComponent {

  sellerObj : SellerModel = new SellerModel();
  
      constructor(private sellerService: SellerService,private router: Router) {}
  
      onSaveAdmin(): void {
        this.sellerService.saveSeller1(this.sellerObj).subscribe(
          (result: any) => {
            if (result.result) {
              alert('Seller Details Saved Successfully');
            } else {
              alert(result.message);
            }
          },
          (error) => {
            console.error('Error seller Saved', error);
            alert('Failed to seller..');
          }
        );
      }

}
