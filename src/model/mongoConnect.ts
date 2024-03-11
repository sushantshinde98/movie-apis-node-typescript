import mongoose, { ConnectOptions } from 'mongoose';
import { dbURL, logger } from './../util/index';

mongoose.connect(dbURL, { useUnifiedTopology: true } as ConnectOptions);

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.once('open', () => {
  logger.info('Connected to mongoDB!');
  // console.log('Connected to MongoDB');
});

export default db;
