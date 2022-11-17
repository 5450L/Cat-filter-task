import { Action } from '@ngrx/store';

export const FETCH_BREEDS = 'FETCH_BREEDS';
export const FETCH_PHOTOS = 'FETCH_PHOTOS';

export class FetchBreeds implements Action {
  readonly type = FETCH_BREEDS;
  constructor(public payload: any) {}
}

