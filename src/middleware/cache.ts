import nodeCache from 'node-cache';
import express, { Request, Response, NextFunction } from 'express';
import { logger } from '../util';
const cache = new nodeCache();

const duration = (req: Request, res: Response, next: NextFunction) => {
  //   if (req.method !== 'GET') {
  //     logger.error('can not cache non-GET methods!');
  //     next();
  //   }

  const key: string = req.originalUrl;
  const cachedResponse = cache.get(key);
  if (cachedResponse && req.method === 'GET') {
    logger.info(`cache hit`);
    res.send(cachedResponse);
  } else {
    next();
  }
};

export default duration;
