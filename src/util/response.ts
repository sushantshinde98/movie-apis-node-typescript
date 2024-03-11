import express, { Request, Response } from 'express';
import resMessage from './resMessage';
import nodeCache from 'node-cache';
import { logger } from './index';
const cache = new nodeCache();
export const sendResponse = (req: Request, res: Response, customJSON: any, customMsgType: string, customMsgCode: string) => {
  const response: any = {};

  if (resMessage[customMsgType] && resMessage[customMsgType][customMsgCode]) {
    response.success = resMessage[customMsgType][customMsgCode].success;
    response.statusCode = resMessage[customMsgType][customMsgCode].statusCode;
    response.messageCode = resMessage[customMsgType][customMsgCode].messageCode;
    response.message = resMessage[customMsgType][customMsgCode].message;
    response.data = customJSON;
  } else {
    response.success = false;
    response.statusCode = '';
    response.messageCode = '';
    response.message = 'Empty Message!';
    response.data = customJSON;
  }

  const cached = cache.get(req.originalUrl);

  if (cached) {
    logger.info(`cache present! for key : ${req.originalUrl} hence no settting`);
  } else {
    logger.info(`cache set success for key: ${req.originalUrl}`);
    cache.set(req.originalUrl, response);
  }
  res.json(response);
};
