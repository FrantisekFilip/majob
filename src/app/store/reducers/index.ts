import {ActionReducerMap, combineReducers} from '@ngrx/store';
import {baseInformationReducer} from './baseInformation.reducer';

export const reducers = combineReducers( {
  baseInformation: baseInformationReducer,
})
