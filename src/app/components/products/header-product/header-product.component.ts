import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActionEvent, ProductActionType} from "../../../states/app-data.state";
import {EventDriverService} from "../../../services/event_driver.service";

@Component({
  selector: 'app-header-product',
  templateUrl: './header-product.component.html',
  styleUrls: ['./header-product.component.scss']
})

export class HeaderProductComponent implements OnInit {

  // @Output() productEventEmitter : EventEmitter<ActionEvent> = new EventEmitter();
  constructor(private eventDrivenService : EventDriverService) { }

  ngOnInit(): void {
  }

  onGetAllProduct() {
    // this.productEventEmitter.emit({type : ProductActionType.GET_ALL_PRODUCTS, payload: null});
    this.eventDrivenService.publishEvent({type : ProductActionType.GET_ALL_PRODUCTS, payload: null})
  }

  onGetSelectedProduct() {
    // this.productEventEmitter.emit({type : ProductActionType.GET_SELECTED_PRODUCT, payload: null});
    this.eventDrivenService.publishEvent({type : ProductActionType.GET_SELECTED_PRODUCT, payload: null})
  }

  onGetAvailableProduct() {
    // this.productEventEmitter.emit({type : ProductActionType.GET_AVAILABLE_PRODUCT, payload: null});
    this.eventDrivenService.publishEvent({type : ProductActionType.GET_AVAILABLE_PRODUCT, payload: null})
  }

  onCreateProduct() {
    // this.productEventEmitter.emit({type : ProductActionType.CREATE_PRODUCT});
    this.eventDrivenService.publishEvent({type : ProductActionType.CREATE_PRODUCT})
  }

  onSearch(form: any) {
    // this.productEventEmitter.emit({type : ProductActionType.SEARCH_PRODUCT, payload: form.search})
    this.eventDrivenService.publishEvent({type : ProductActionType.GET_AVAILABLE_PRODUCT, payload: null})
  }
}
