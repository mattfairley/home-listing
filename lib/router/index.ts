import * as express from 'express';
import path from 'path';
import { getListings } from '../listings';
import { getSuggestions } from '../suggestions';

export const router = express.Router();

router.get('/api/suggestions', getSuggestions);

router.get('/api/listings', getListings);

router.use('/assets', express.static('dist/build/static'));

router.use(
  '/*',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.sendFile(path.resolve('../public/index.html'), null, (err) => {
      if (err) next(err);
    });
  },
);
