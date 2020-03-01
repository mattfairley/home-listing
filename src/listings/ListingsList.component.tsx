import * as React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';
import ListingCard from './ListingCard.connect';

const useStyles = makeStyles({
  listings: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export const ListingsList = ({ listingIds, isFetching }) => {
  const classes = useStyles();
  // This would probably be more complex, maybe connecting higher up, or putting in a router
  if (listingIds.length === 0 && !isFetching) return null;
  return (
    <div className={classes.listings}>
      {isFetching ? (
        <CircularProgress />
      ) : (
        listingIds.map((id) => <ListingCard listingId={id} key={id} />)
      )}
    </div>
  );
};
