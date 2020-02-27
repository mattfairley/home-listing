export interface SearchState {
  locationQuery: string;
  minRooms: number;
  minBaths: number;
  minPrice: number;
  maxPrice: number;
  isFetchingListings: boolean;
  locationSuggestions: string[];
  isFetchingSuggestions: boolean;
}

export enum SEARCH_TYPES {
  REQUEST_LISTINGS = 'search/FETCH_LISTINGS',
  REQUEST_SUGGESTIONS = 'search/FETCH_SUGGESTIONS',
  RECEIVE_LISTINGS = 'search/RECEIVE_LISTINGS',
  RECEIVE_SUGGESTIONS = 'search/RECEIVE_SUGGESTIONS',
  SET_FILTER = 'search/SET_FILTER',
}

export interface RequestListingsAction {
  type: SEARCH_TYPES.REQUEST_LISTINGS;
}

export interface RequestSuggestionsAction {
  type: SEARCH_TYPES.REQUEST_SUGGESTIONS;
}

export interface SetFilterAction {
  type: SEARCH_TYPES.SET_FILTER;
  payload:
    | {
        filter: 'minRooms' | 'minBaths' | 'maxPrice' | 'minPrice';
        value: number;
      }
    | { filter: 'locationQuery'; value: string };
}
