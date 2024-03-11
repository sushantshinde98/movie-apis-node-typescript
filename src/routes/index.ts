import express, { Request, Response } from 'express';
import { logger, sendRes } from '../util/index';

const app = express();

const baseRoute = express.Router();
const movieRoute = express.Router();

//routes declarations
import movie from './movie.route';

//base route
baseRoute.get('/', (req: Request, res: Response) => {
  logger.info(`movie-lobby, "ROOT API", ${JSON.stringify(req.body)}`);
  sendRes(req, res, null, 'COMMON_MESSAGE', 'WELCOME');
});

//all routes
movieRoute.use('/', movie);

app.use(baseRoute);
app.use(movieRoute);

export = app;
