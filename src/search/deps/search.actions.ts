import { SEARCH_TYPES } from './search.types';
import { Listing } from '../../types';
import { normalizeArray } from '../../utils/normalize-array';

export const requestListings = () => ({
  type: SEARCH_TYPES.REQUEST_LISTINGS,
});

export const requestSuggestions = () => ({
  type: SEARCH_TYPES.REQUEST_SUGGESTIONS,
});

export const changeFilter = (filter, value) => ({
  type: SEARCH_TYPES.SET_FILTER,
  payload: {
    filter,
    value,
  },
});

export const receiveSuggestions = (suggestions) => ({
  type: SEARCH_TYPES.RECEIVE_SUGGESTIONS,
  payload: { suggestions },
});

export const receiveListings = (
  listings: Listing[],
  totalMatches: number,
  nextKey: string,
) => {
  const normalizedListings = normalizeArray(listings);
  return {
    type: SEARCH_TYPES.RECEIVE_LISTINGS,
    payload: { listings: normalizedListings, totalMatches, nextKey },
  };
};
