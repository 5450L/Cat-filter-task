import * as CatFilterActions from '../actions/cat-filter.actions';

export interface CatFilterState {
  breeds: [{ name: string; id: string }];
  photos: any;
}

let initialState: CatFilterState = {
  breeds: [{ name: 'Cat', id: 'cat' }],
  photos: [],
};

export function catFilterReducer(
  state: CatFilterState = initialState,
  action: CatFilterActions.CatFilterActions
): CatFilterState {
  switch (action.type) {
    case CatFilterActions.FETCH_BREEDS:
      return { breeds: action.payload, photos: state.photos };
    case CatFilterActions.FETCH_PHOTOS:
      return { breeds: state.breeds, photos: action.payload };
    default:
      return state;
  }
}
