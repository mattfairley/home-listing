import { SEARCH_TYPES } from '../../search/deps/search.types';
import { ListingsState } from './listings.types';

const initialState: Readonly<ListingsState> = {
  listings: { ids: [], data: {} },
  totalMatches: 0,
  nextKey: null,
  activeListing: null,
};

export const listingsReducer = (
  state: ListingsState = initialState,
  action,
): ListingsState => {
  switch (action.type) {
    case SEARCH_TYPES.RECEIVE_LISTINGS: {
      return {
        ...state,
        nextKey: action.payload.nextKey,
        totalMatches: action.payload.totalMatches,
        listings: action.payload.listings,
      };
    }
    default:
      return state;
  }
};
