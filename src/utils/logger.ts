import pino from 'pino';

const env = process.env.ENV || 'dev';
const isDev = env === 'dev';

const logger = pino(
    isDev
        ? {
            level: 'debug',
            base: null,
            timestamp: pino.stdTimeFunctions.isoTime,
            transport: {
                target: 'pino-pretty',
                options: {
                    colorize: true,
                    translateTime: 'SYS:standard',
                    ignore: 'pid,hostname',
                },

            },
        }
        : {
            level: 'info',
            base: null,
            timestamp: pino.stdTimeFunctions.isoTime,
        }
);

export default logger;
