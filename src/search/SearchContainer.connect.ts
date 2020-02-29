import { connect } from 'react-redux';
import { AppState } from '../types';

import { SearchContainer } from './SearchContainer.component';
import { getListings, changeLocationQuery } from './deps/search.operations';
import { changeFilter } from './deps/search.actions';

export const mapStateToProps = (state: AppState) => {
  const {
    locationQuery,
    locationSuggestions,
    minRooms,
    minBaths,
    minPrice,
    maxPrice,
  } = state.search;
  return {
    locationQuery,
    locationSuggestions,
    minRooms,
    minBaths,
    minPrice,
    maxPrice,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getListings: () => dispatch(getListings()),
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value)),
    changeQuery: (val) => dispatch(changeLocationQuery(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
