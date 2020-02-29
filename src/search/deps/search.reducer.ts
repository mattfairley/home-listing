import { SearchState, SEARCH_TYPES } from './search.types';

const initialState: Readonly<SearchState> = {
  locationQuery: '',
  minBaths: 0,
  minRooms: 0,
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
    case SEARCH_TYPES.SET_FILTER: {
      return {
        ...state,
        [action.payload.filter]: action.payload.value,
      };
    }
    case SEARCH_TYPES.REQUEST_LISTINGS: {
      return {
        ...state,
        isFetchingListings: true,
      };
    }
    case SEARCH_TYPES.RECEIVE_LISTINGS: {
      return {
        ...state,
        isFetchingListings: false,
      };
    }
    default:
      return state;
  }
};
