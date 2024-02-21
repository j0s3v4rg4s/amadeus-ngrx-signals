import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopService } from 'src/app/services/shop.service';
import { Product } from 'src/app/models/product.interface';
import { ProductComponent } from 'src/app/components/product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: Product[] = [];
  
  constructor(private readonly shopService: ShopService) {
    this.shopService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
