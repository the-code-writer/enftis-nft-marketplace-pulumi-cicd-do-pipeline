'use strict';

const logger = require('node-color-log');

const winston = require('winston');

const { createLogger, format, transports } = require('winston');

const { combine, timestamp, label, printf } = format;

const myFormat = printf((params:any) => {
    const { level, message, label, timestamp }:any = params;
    return `${timestamp} [${label}] [${level}]: ${message}`;
});

const _logger = createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        label({ label: 'ENFTIS' }),
        myFormat
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.File({ filename: 'logs/combined.log' }),
        new transports.Console({ level: 'error' }),
    ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    _logger.add(new transports.Console({
        format: winston.format.simple(),
    }));
}

const LoggerHelper = class LoggerClass {
    /* Private Instance Fields */

    isProduction;

    /* Constructor */

    constructor() {

        this.isProduction = parseInt(process.env.BACKEND_ROUTE_PREFIX||"") === 1;

    }

    /* Public Instance Methods */

    log(payload: any){
        if(!this.isProduction) logger.dim().debug(payload);
        _logger.info(payload)
    }

    debug(payload: any){
        if(!this.isProduction) logger.debug(payload);
        _logger.info(payload)
    }

    info(payload: any){
        if(!this.isProduction) logger.info(payload);
        _logger.info(payload)
    }

    success(payload: any){
        if(!this.isProduction) logger.success(payload);
        _logger.info(payload)
    }

    warn(payload: any){
        if(!this.isProduction) logger.warn(payload);
        _logger.info(payload)
    }

    error(payload: any){
        if(!this.isProduction) logger.error(payload);
        _logger.error(payload)
    }

}

const Logger = new LoggerHelper();

export {Logger, _logger};