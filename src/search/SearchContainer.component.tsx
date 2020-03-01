import * as React from 'react';
import {
  Input,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Paper,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from '../components/Form';
import { formatCurrency } from '../utils/format-currency';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    maxWidth: '90%',
    margin: 16,
    padding: 16,
    justifyContent: 'center',
  },
  form: {
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap',
  },
  search: {
    width: '100%',
    marginBottom: 16,
  },
  slider: {
    width: 300,
  },
});

export interface SearchContainerProps {
  locationQuery: string;
  minBaths: number;
  minRooms: number;
  minPrice: number;
  maxPrice: number;
  changePriceRange: ([minPrice, maxPrice]: number[]) => void;
  getListings: () => void;
  changeQuery: (val: string) => void;
  changeFilter: (filter: string, val: number) => void;
}

export const SearchContainer: React.SFC<SearchContainerProps> = ({
  locationQuery,
  // locationSuggestions,
  minBaths,
  minRooms,
  minPrice,
  maxPrice,
  changePriceRange,
  getListings,
  changeQuery,
  changeFilter,
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <Form onSubmit={getListings} className={classes.form}>
        <FormControl className={classes.search}>
          <InputLabel id="locationQuery">Where are you looking?</InputLabel>
          <Input
            id="locationQuery"
            required={true}
            fullWidth={true}
            onChange={(e) => changeQuery(e.target.value as string)}
            value={locationQuery}
          />
        </FormControl>
        <FormControl className={classes.slider}>
          <Typography>{`Price: ${formatCurrency(minPrice)} ${
            maxPrice ? `to ${formatCurrency(maxPrice)}` : 'and up'
          }`}</Typography>
          <Slider
            value={[minPrice, maxPrice]}
            id="priceRange"
            onChange={(e, priceRange) =>
              changePriceRange(priceRange as number[])
            }
            aria-labelledby="priceRange"
            min={0}
            max={1000000}
            step={10000}
          />
        </FormControl>
        <FormControl>
          <InputLabel id="minRooms"># of Bedrooms</InputLabel>
          <Select
            id="minRooms"
            labelId="minRooms"
            value={minRooms}
            onChange={(e) => changeFilter('minRooms', e.target.value as number)}
          >
            <MenuItem value={0}>Any</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3+</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="minBaths"># of Baths</InputLabel>
          <Select
            id="minBaths"
            labelId="minBaths"
            value={minBaths}
            onChange={(e) => changeFilter('minBaths', e.target.value as number)}
          >
            <MenuItem value={0}>Any</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3+</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" type="submit">
          Find a home
        </Button>
      </Form>
    </Paper>
  );
};
