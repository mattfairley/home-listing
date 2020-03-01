import { Request, Response, NextFunction } from 'express';
import wait from 'waait';

export const getListings = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Do a lookup of listings relevant to the search

  // In the case where fields are missing, or data might be incomplete, ignore those fields

  // ie if the house has no room data, only surface it if no room query is provided

  // This is hardcoded to highlight how missing data might be handled
  const listings = [
    {
      id: '123-567',
      price: 500000,
      address: {
        street: '123 Fake Street',
        city: 'Toronto',
        province: 'on',
        postalCode: 'M6W 2E4',
      },
    },
    {
      id: '123-568',
      price: 700000,
      baths: 2,
      bedrooms: 3,
      photoUrl: 'https://placekitten.com/500/800',
      address: {
        street: '700 Very Real Avenue',
        city: 'Toronto',
        province: 'on',
        postalCode: 'M6W 2E4',
      },
    },
    {
      id: '123-569',
      price: 600000,
      baths: 4,
      bedrooms: 5,
      photoUrl: 'https://placekitten.com/550/500',
      address: {
        street: '123 Fake Street',
        city: 'Ottawa',
        province: 'on',
        postalCode: 'N3W 2E4',
      },
    },
    {
      id: '123-570',
      price: 250000,
      bedrooms: 1,
      baths: 2,
      address: {
        street: '500 Internet Boulevard',
        unit: 'Suite 705',
        city: 'Toronto',
        province: 'on',
        postalCode: 'M6V 2E4',
      },
    },
  ];
  // Put a timeout in here to simulate loading
  await wait(500);
  res.json({ data: { listings, matches: 60, pagination: null } });
};
