import { AppState } from '../../types';

export const checkSearchForm = (
  state: AppState,
): { [field: string]: string } => {
  let errors = {};
  const { minPrice, maxPrice, locationQuery } = state.search;
  if (minPrice > maxPrice) {
    errors = {
      ...errors,
      minPrice: 'Minimum price must be less than maximum price',
    };
  }
  if (locationQuery.trim() === '') {
    errors = {
      ...errors,
      locationQuery: 'You must enter a location to search',
    };
  }
  return errors;
};
