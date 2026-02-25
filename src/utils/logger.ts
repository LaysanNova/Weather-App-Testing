import pino from "pino";

const isCI = process.env.CI === "true";

export const logger = pino(
    {
        level: process.env.LOG_LEVEL || 'info',
    },
    process.env.CI === 'true'
        ? pino.transport({
            target: 'pino-pretty',
            options: {
                colorize: true,
                translateTime: 'HH:MM:ss',
                ignore: 'pid,hostname',
            },
        })
        : undefined
);
