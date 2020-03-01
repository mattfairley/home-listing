import { createSelector } from 'reselect';
import { AppState } from '../../types';

export const selectListingsState = (state: AppState) => state.listings;

export const selectListingById = (id) =>
  createSelector(
    selectListingsState,
    (listingsState) => listingsState.listingsData.data[id],
  );
