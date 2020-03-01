import {
  requestListings,
  changeFilter,
  requestSuggestions,
  receiveSuggestions,
  receiveListings,
} from './search.actions';
import { to, get } from '../../utils/fetch';
import { Listing } from '../../types';

export const changeLocationQuery = (query: string) => (dispatch, getState) => {
  dispatch(changeFilter('locationQuery', query));
  // Add some logic here to get suggestions based on what the user is typing in, using the requestSuggestions and receiveSuggestions. Likely debouncing (probably should be done on the component level)
  if (query.length > 3 && !getState().search.fetchingSuggestions) {
    dispatch(requestSuggestions());
    // get the suggestions
    dispatch(receiveSuggestions([]));
  }
};

export const getListings = () => async (dispatch, getState) => {
  const { search } = getState();
  dispatch(requestListings());
  const queryParams = {
    minBaths: search.minBaths,
    minRooms: search.minRooms,
    query: search.locationQuery,
    minPrice: search.minPrice,
    maxPrice: search.maxPrice,
  };
  const [err, response]: [
    Error?,
    {
      data: {
        listings: Listing[];
        nextKey: string;
        totalResults: number;
      };
    }?,
  ] = await to(get('/api/listings', queryParams));
  if (err || !response.data) {
    // Todo error handling would go here, displaying an error message of some variety by setting it in state
    console.log(err);
    return;
  }
  dispatch(
    receiveListings(
      response.data.listings,
      response.data.totalResults,
      response.data.nextKey,
    ),
  );
};
