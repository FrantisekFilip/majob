import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import {ofType} from "@ngrx/effects";
import {SET_PRODUCT, SetProduct} from '../actions/base-information.actions';
import {map} from "rxjs/operators";

@Injectable()
export class BaseInformationEffects {

  /*setProductType$: Observable<Action> = this.actions$.pipe(
    ofType<any>(SET_PRODUCT),
    map(action => action.payload),
  )*/


  constructor(
    private actions$: Action,
  ) {}
}
