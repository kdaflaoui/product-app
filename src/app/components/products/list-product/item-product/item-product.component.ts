import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../model/product.model";
import {ActionEvent, ProductActionType} from "../../../../states/app-data.state";
import {EventDriverService} from "../../../../services/event_driver.service";

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss']
})
export class ItemProductComponent implements OnInit {

  @Input() product!: Product;

  constructor(private eventDriverService : EventDriverService) { }

  ngOnInit(): void {
  }

  onSelected(product: Product) {
    this.eventDriverService.publishEvent({type : ProductActionType.SELECT_PRODUCT, payload: product})
  }

  onUpdateProduct(product: Product) {
    this.eventDriverService.publishEvent({type : ProductActionType.UPDATE_PRODUCT, payload: product})
  }

  onDelete(product: Product) {
    this.eventDriverService.publishEvent({type : ProductActionType.DELETE_PRODUCT, payload: product})
  }
}
