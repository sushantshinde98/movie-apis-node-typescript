import { sendResponse } from './response';
import mylogger from './logger';

// export = {
//  const sjs dbURL: 'mongodb://localhost:27017/mydb',
//   logger,
//   sendRes: response,
// };
export const dbURL: any = 'mongodb://localhost:27017/mydb';
export const logger: any = mylogger;
export const sendRes: any = sendResponse;
