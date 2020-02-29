import * as React from 'react';
import {
  Input,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import { Form } from '../components/Form';

export interface SearchContainerProps {
  locationQuery: string;
  minBaths: number;
  minRooms: number;
  getListings: () => void;
  changeQuery: (val: string) => void;
  changeFilter: (filter: string, val: number) => void;
}

export const SearchContainer: React.SFC<SearchContainerProps> = ({
  locationQuery,
  // locationSuggestions,
  minBaths,
  minRooms,
  getListings,
  changeQuery,
  changeFilter,
}) => (
  <Form className="search" onSubmit={getListings}>
    <FormControl>
      <InputLabel id="location">Find your new House</InputLabel>
      <Input
        id="location"
        fullWidth={true}
        onChange={(e) => changeQuery(e.target.value as string)}
        value={locationQuery}
      />
    </FormControl>
    <FormControl>
      <InputLabel id="room-count"># of Bedrooms</InputLabel>
      <Select
        id="room-count"
        labelId="room-count"
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
      <InputLabel id="bath-count"># of Baths</InputLabel>
      <Select
        id="bath-count"
        labelId="bath-count"
        value={minBaths}
        onChange={(e) => changeFilter('minBaths', e.target.value as number)}
      >
        <MenuItem value={0}>Any</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3+</MenuItem>
      </Select>
    </FormControl>

    <Button color="primary" type="submit">
      Find my new base
    </Button>
  </Form>
);
