import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-product',
  imports: [FormsModule],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent {
  productIdToDelete: undefined;
  product2Service: any;
  async deleteProduct(): Promise<void> {
    if (this.productIdToDelete === undefined) {
      alert('Please enter a product ID to delete.');
      return;
    }

    try {
      await this.product2Service.deleteProduct(this.productIdToDelete);
      alert(`Product with ID ${this.productIdToDelete} deleted successfully.`);
      // Reload products after deletion
      await this.loadProducts();
    } catch (error) {
      console.error('Error deleting product', error);
      alert('Failed to delete product. Please try again later.');
    }
  }
  loadProducts() {
    throw new Error('Method not implemented.');
  }

}
