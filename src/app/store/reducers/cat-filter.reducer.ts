import * as CatFilterActions from '../actions/cat-filter.actions';

export interface CatFilterState {
  breeds: [{ name: string; id: string }];
}

let initialState: CatFilterState = {
  breeds: [{ name: 'Cat', id: 'cat' }],
};

export function catFilterReducer(
  state: CatFilterState = initialState,
  action: CatFilterActions.FetchBreeds
): CatFilterState {
  switch (action.type) {
    case CatFilterActions.FETCH_BREEDS:
      return { breeds: action.payload };
    default:
      return state;
  }
}
