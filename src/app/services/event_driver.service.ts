import {Subject} from "rxjs";
import {ActionEvent} from "../states/app-data.state";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class EventDriverService {

  sourceEventSubject : Subject<ActionEvent> = new Subject<ActionEvent>();
  sourceEventSubjectObservable = this.sourceEventSubject.asObservable();

  publishEvent(event: ActionEvent){
    this.sourceEventSubject.next(event);
  }
}
