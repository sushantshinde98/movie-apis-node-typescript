import express from 'express';
import db from './model/mongoConnect';
import routes from './routes';
import { logger } from './util';
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use('/', routes);

app.listen(port, () => {
  db;
  logger.info(`Application started on port ${port}!`);
});

export default app;
