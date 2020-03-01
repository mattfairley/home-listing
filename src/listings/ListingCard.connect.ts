import { connect } from 'react-redux';
import { ListingCard, ListingCardProps } from './ListingCard';
import { selectListingById } from './deps/listings.selectors';
import { AppState } from '../types';
import { setActiveListing } from './deps/listings.actions';

export const mapStateToProps = (
  state: AppState,
  ownProps,
): Partial<ListingCardProps> => {
  const listing = selectListingById(ownProps.listingId)(state);
  return {
    ...listing,
    photoUrl: listing.photoUrl || 'https://www.placecage.com/g/600/600/',
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    expandListing: () => dispatch(setActiveListing(ownProps.listingId)),
  };
};

export default connect(mapStateToProps)(ListingCard);
