import express from 'express';

import { httpLoggerMiddleware } from './middlewares/httpLogger';
import { createRequestIdMiddleware } from './middlewares/reqId';
import { mainController } from './controllers/main';
import { errorHandler } from './controllers/error';

const app = express();

app.use('/', express.static('static'));

app.set('view engine', 'ejs');
app.set('x-powered-by', false);
app.set('trust proxy', true);

app.use(createRequestIdMiddleware());
app.use(httpLoggerMiddleware);

app.get('/', mainController);

app.use(errorHandler);

export default app;
