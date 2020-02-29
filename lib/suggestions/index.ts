import { Request, Response, NextFunction } from 'express';

export const getSuggestions = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // For this endpoint, use some caching via redis (and use a 3rd party like Google or something) to ensure we're not doing lookups all the time. This could even be handled on the client-side by something like a google maps library
  res.json({ data: [] });
};
