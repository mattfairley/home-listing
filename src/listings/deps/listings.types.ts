import { Listing } from '../../types';

export enum LISTINGS_TYPES {
  SET_ACTIVE_LISTING = 'listings/SET_ACTIVE_LISTING',
}

export interface ListingsState {
  activeListing: string;
  totalMatches: number;
  nextKey: string;
  listings: {
    ids: string[];
    data: {
      [id: string]: Listing;
    };
  };
}
