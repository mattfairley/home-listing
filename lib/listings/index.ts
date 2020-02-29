import { Request, Response, NextFunction } from 'express';

export const getListings = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(req.query);

  // Do a lookup of listings relevant to the search

  // In the case where fields are missing, or data might be incomplete, ignore those fields

  // ie if the house has no room data, only surface it if no room query is provided
  res.json({ data: [], matches: 0, pagination: null });
};
