import { SearchState } from './search/deps/search.types';

export type ToResponse<T> = [Error?, T?];

export interface AppState {
  search: SearchState;
}
