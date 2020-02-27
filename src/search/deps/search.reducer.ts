import { SearchState } from './search.types';

const initialState: Readonly<SearchState> = {
  locationQuery: '',
  minBaths: null,
  minRooms: null,
  isFetchingListings: false,
  isFetchingSuggestions: false,
  minPrice: 0,
  maxPrice: null,
  locationSuggestions: [],
};

export const searchReducer = (
  state: SearchState = initialState,
  action,
): SearchState => {
  switch (action.type) {
    default:
      return state;
  }
};
