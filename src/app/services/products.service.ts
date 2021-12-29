import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../components/model/product.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit{

  products : Product[] = [];
  base_url = environment.base_url

  constructor(private http : HttpClient) { }

  ngOnInit(): void {}

  // Get methods

  getObservableOneProducts(id: number) : Observable <Product> {
    return this.http.get<Product>(this.base_url + "/products/"+id);
  }

  getObservableAllProducts() : Observable <Product[]> {
    return this.http.get<Product[]>(this.base_url + "/products");
  }

  getObservableSelectedProducts() : Observable <Product[]> {
    return this.http.get<Product[]>(this.base_url + "/products?isSelected=true");
  }

  getObservableAvailableProducts() : Observable <Product[]> {
    return this.http.get<Product[]>(this.base_url + "/products?isAvailable=true");
  }

  getObservableSearchProducts(keyWord : string) : Observable <Product[]> {
    return this.http.get<Product[]>(this.base_url + "/products?name_like="+ keyWord);
  }

  //Update methods
  updateProduct(product : Product): Observable<Product>{
    return this.http.put<Product>(this.base_url + "/products/"+product.id, product);
  }

  updateSelectedProduct(product : Product): Observable<Product>{
    product.isSelected = !product.isSelected;
    return this.http.put<Product>(this.base_url + "/products/"+product.id, product);
  }

  //Delete
  deleteProduct(product : Product): Observable<void> {
    return this.http.delete<void>(this.base_url + "/products/"+product.id);
  }

  //Create
  createProduct(product : Product): Observable<Product>{
    return this.http.post<Product>(this.base_url + "/products/", product);
  }
}
