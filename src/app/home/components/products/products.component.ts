import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductListItem } from './products.type';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from '../../../shared/components/ratings/ratings.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RatingsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [ProductsService, CommonModule]
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  loading = true;
  error :string | null = null
  

  constructor(private productService: ProductsService) {
  }

  ngOnInit():void {
    this.productService.getProductList().subscribe({
      next:(data)=>{
        const prod = data.products
        this.products = prod
        console.log(data)
        this.loading = false
      },
      error:(err)=>{
        console.log('error cargando updated datos');
        this.loading = false
      }
    })
  }
}
