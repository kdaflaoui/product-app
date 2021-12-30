import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionType} from "../../../states/app-data.state";
import {Product} from "../../model/product.model";
import {EventDriverService} from "../../../services/event_driver.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  @Input() productsListData$?: Observable<AppDataState<Product[]>>;
  @Output() listProductEventEmitter : EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();
  readonly dataStateEnum = DataStateEnum;

  constructor(private eventDriverService: EventDriverService) { }

  ngOnInit(): void {
  }

  onActionEvent($event: ActionEvent) {
    this.eventDriverService.publishEvent($event);
  }
}
