import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private _baseurl: string = 'http://localhost:8081/product-api/products'
  constructor(private http: HttpClient) { }

  getAllProducts = ():Observable<Product[]> => {
      return this.http.get<Product[]>(this._baseurl);
  }

  getById = (ProductId: number): Observable<Product> => {
    let url = this._baseurl + "/id/" + ProductId;
    let productObs:Observable<Product> = this.http.get<Product>(url);
    return productObs;
  }

}
