import { SearchState } from './search/deps/search.types';
import { ListingsState } from './listings/deps/listings.types';

export type ToResponse<T> = [Error?, T?];

export interface AppState {
  search: SearchState;
  listings: ListingsState;
}

export type PROVINCES = 'on' | 'ab';

export interface Address {
  street: string;
  unit?: string;
  postalCode: string;
  city: string;
  province: PROVINCES;
}

export interface Listing {
  id: string;
  baths?: number;
  bedrooms?: number;
  price: number;
  photoUrl?: string;
  address: Address;
}
