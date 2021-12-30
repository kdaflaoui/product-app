import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../model/product.model";
import {ActionEvent, ProductActionType} from "../../../../states/app-data.state";

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss']
})
export class ItemProductComponent implements OnInit {

  @Input() product!: Product;
  @Output() eventEmitter : EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(product: Product) {
    this.eventEmitter.emit({type : ProductActionType.SELECT_PRODUCT, payload: product})
  }

  onUpdateProduct(product: Product) {
    this.eventEmitter.emit({type : ProductActionType.UPDATE_PRODUCT, payload: product})
  }

  onDelete(product: Product) {
    this.eventEmitter.emit({type : ProductActionType.DELETE_PRODUCT, payload: product})
  }
}
