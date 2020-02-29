import { LISTINGS_TYPES } from './listings.types';

export const setActiveListing = (id: string) => ({
  type: LISTINGS_TYPES.SET_ACTIVE_LISTING,
  payload: {
    id,
  },
});
