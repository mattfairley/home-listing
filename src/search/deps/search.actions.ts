import { SEARCH_TYPES } from './search.types';

export const requestSuggestions = () => ({
  type: SEARCH_TYPES.REQUEST_LISTINGS,
});

export const changeFilter = (filter, value) => ({
  type: SEARCH_TYPES.SET_FILTER,
  payload: {
    filter,
    value,
  },
});
