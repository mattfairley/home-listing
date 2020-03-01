import * as React from 'react';

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { SingleBed, BathtubOutlined } from '@material-ui/icons';
import { Listing } from '../types';
import { formatCurrency } from '../utils/format-currency';

export interface ListingCardProps extends Listing {
  expandListing: () => void;
}

const useStyles = makeStyles({
  card: {
    minWidth: 345,
    margin: 16,
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
  paragraph: {
    display: 'flex',
    alignItems: 'center',
  },
});

export const ListingCard: React.SFC<ListingCardProps> = ({
  address,
  price,
  baths,
  bedrooms,
  photoUrl,
  expandListing,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader title={address.street} subheader={formatCurrency(price)} />
      <CardMedia className={classes.media} image={photoUrl} />
      <CardContent>
        {baths && (
          <Typography className={classes.paragraph}>
            {baths}
            <BathtubOutlined fontSize="small" />
          </Typography>
        )}
        {bedrooms && (
          <Typography className={classes.paragraph}>
            {bedrooms}
            <SingleBed fontSize="small" />
          </Typography>
        )}
        <Typography>{`${
          address.city
        }, ${address.province.toUpperCase()}`}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={expandListing} size="small">
          See Details
        </Button>
      </CardActions>
    </Card>
  );
};
