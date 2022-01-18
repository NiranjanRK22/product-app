import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Product[]|undefined;
  constructor(private _productService: ProductService, private _router: Router) { }

  ngOnInit(): void {
    this._productService.getAllProducts().subscribe({
      next: data => {
        this.products = data;
        console.log(data)
      },
      error: error => console.log(error),
      complete:() => console.log('completed')
    })
   
    
  }
  onSubmit = (product: Product) => {
    console.log(product);
    this._router.navigate(['/product-details', product.productId]);
  }
}
