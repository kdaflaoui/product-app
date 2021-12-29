import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Observable, of} from "rxjs";
import {Product} from "../model/product.model";
import {catchError, map, startWith} from "rxjs/operators";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionType} from "../../states/app-data.state";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsData$?: Observable<AppDataState<Product[]>>;
  readonly dataStateEnum = DataStateEnum;

  constructor(private productsService: ProductsService, private route: Router) {
  }

  ngOnInit(): void {
  }

  onGetAllProduct() {
    this.productsData$ = this.productsService.getObservableAllProducts()
      .pipe(
        map(products => ({dataState: DataStateEnum.LOADED, data: products})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      )
  }

  onGetSelectedProduct() {
    this.productsData$ = this.productsService.getObservableSelectedProducts()
      .pipe(
        map(products => ({dataState: DataStateEnum.LOADED, data: products})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      )
  }

  onGetAvailableProduct() {
    this.productsData$ = this.productsService.getObservableAvailableProducts()
      .pipe(
        map(products => ({dataState: DataStateEnum.LOADED, data: products})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      )
  }

  onGetSearchProduct(keyWord : string) {
    this.productsData$ = this.productsService.getObservableSearchProducts(keyWord)
      .pipe(
        map(products => ({dataState: DataStateEnum.LOADED, data: products})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      )
  }

  onSearch(form : NgForm) {
    const keyWord = form.value['search']
    this.onGetSearchProduct(keyWord);
  }

  onSelected(product: Product) {
    this.productsService.updateSelectedProduct(product).subscribe(
      (prd) =>{
        product.isSelected = prd.isSelected
      }
    );
  }

  onDelete(product: Product) {
    let deleteConfirmed = confirm("Are sure want to delete: "+product.name)
    if(deleteConfirmed) {
      this.productsService.deleteProduct(product).subscribe(
        () =>{
          this.onGetAllProduct();
        }
      );
    }
  }

  onCreateProduct() {
    this.route.navigateByUrl("/add-product");
  }

  onUpdateProduct(product : Product) {
    this.route.navigateByUrl("/edit-product/" + product.id)
  }

  onProductEventReceived($event : ActionEvent) {
    switch ($event.type){
      case ProductActionType.GET_ALL_PRODUCTS: this.onGetAllProduct(); break;
      case ProductActionType.GET_SELECTED_PRODUCT: this.onGetSelectedProduct(); break;
      case ProductActionType.GET_AVAILABLE_PRODUCT: this.onGetAvailableProduct(); break;
      case ProductActionType.SEARCH_PRODUCT: this.onGetSearchProduct($event.payload); break;
      case ProductActionType.CREATE_PRODUCT: this.onCreateProduct(); break;
      case ProductActionType.SELECT_PRODUCT : this.onSelected($event.payload); break;
      case ProductActionType.UPDATE_PRODUCT : this.onUpdateProduct($event.payload); break;
      case ProductActionType.DELETE_PRODUCT : this.onDelete($event.payload); break;
    }

  }
}
