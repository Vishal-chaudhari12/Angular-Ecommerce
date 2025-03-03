import { Component } from '@angular/core';
import { AdminModel } from '../../../model/admin';
import { AdminService } from '../../../service/admin.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-admin',
  imports: [FormsModule, NavbarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

   adminObj : AdminModel = new AdminModel();

    constructor(private adminService: AdminService,private router: Router) {}

    onSaveAdmin(): void {
      this.adminService.saveAdmin1(this.adminObj).subscribe(
        (result: any) => {
          if (result.result) {
            alert('Admin Details Saved Successfully');
          } else {
            alert(result.message);
          }
          
        },
        (error) => {
          console.error('Error admin Saved', error);
          alert('Failed to admin..');
        }
      );
    }

}
