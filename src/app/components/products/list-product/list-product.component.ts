import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionType} from "../../../states/app-data.state";
import {Product} from "../../model/product.model";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  @Input() productsListData$?: Observable<AppDataState<Product[]>>;
  @Output() listProductEventEmitter : EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();
  readonly dataStateEnum = DataStateEnum;



  constructor() { }

  ngOnInit(): void {
  }

  onActionEvent($event: ActionEvent) {
    this.listProductEventEmitter.emit($event);
  }
}
