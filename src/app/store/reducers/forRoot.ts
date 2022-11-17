import { ActionReducerMap } from '@ngrx/store';
import { catFilterReducer, CatFilterState } from './cat-filter.reducer';

export const rootReducer = {};

export interface AppState {
  catFilter: CatFilterState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  catFilter: catFilterReducer,
};
