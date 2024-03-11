import winston, { format, Logger, info } from 'winston';
const logger: Logger = winston.createLogger({
  format: format.combine(
    format.simple(),
    format.json(),

    format.timestamp({
      format: 'YY-MM-DD HH:MM:SS',
    }),
    format.colorize({
      all: true,
    }),

    format.printf((info) => {
      return `{${info.level}: ${info.message} : ${info.timestamp}}`;
    })
  ),
  transports: [new winston.transports.Console({}), new winston.transports.File({ filename: 'movie-logfile.log' })],
});

export = logger;
