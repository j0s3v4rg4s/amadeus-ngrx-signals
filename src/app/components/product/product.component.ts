import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/models/product.interface';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product | undefined;

}
