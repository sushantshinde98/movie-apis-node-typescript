import express, { Request, Response, NextFunction } from 'express';
import { sendRes, logger } from '../util/index';
export const adminRoleAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers['role'] !== '' && req.headers['role'] === 'admin') {
    next();
  } else {
    logger.info(`Invalid Role.`);
    sendRes(req, res, null, 'ROLE', 'ADMIN_ROLE_ERROR');
  }
};
