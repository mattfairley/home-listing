import * as bodyParser from 'body-parser';
import express from 'express';
import { router } from './router';

const app = express();
const env = process.env.NODE_ENV || 'development';
const serverPort = process.env.PORT || 8167;
const serverUrl = process.env.SERVER_URL || 'localhost:8167';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

app.listen(serverPort, () => {
  console.log(`The auth-portal server is running on ${serverUrl}`);
});
