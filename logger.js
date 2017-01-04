const winston = require('winston');
const chalk = require('chalk');
const format = require('date-fns').format;
const shell = require('shelljs');

const info = chalk.green;
const debug = chalk.blue;
const warn = chalk.yellow;
const error = chalk.red;


const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({ level: 'debug' }),
    new (winston.transports.File)({
      filename: [format(new Date(), 'YYYYMMDD'), 'log'].join('.'),
      level: 'info',
    }),
  ],
});

const log = (msg) => logger.log('verbose', msg);

const logInfo = (msg) => logger.info(info(msg));
const logDebug = (msg) => logger.log('debug', debug(msg));
const logWarn = (msg_ => logger.warn(warn(msg)));
const logErr = (msg) => logger.error(error(msg));

log.info = logInfo;
log.debug = logDebug;
log.warn = logWarn;
log.error = logErr;

module.exports = log;
