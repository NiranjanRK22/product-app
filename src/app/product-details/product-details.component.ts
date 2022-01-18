import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;
  product!: Product;
  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService) { }
  
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(map=> {
      let id = map.get("id");
      if (id)
        this.productId = parseInt(id);
    });
    this._productService.getById(this.productId).subscribe(data => this.product = data);
  }

}
