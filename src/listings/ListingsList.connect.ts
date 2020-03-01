import { connect } from 'react-redux';
import { ListingsList } from './ListingsList.component';
import { AppState } from '../types';

export const mapStateToProps = (state: AppState) => {
  return {
    listingIds: state.listings.listingsData.ids,
    isFetching: state.search.isFetchingListings,
  };
};

export default connect(mapStateToProps)(ListingsList);
