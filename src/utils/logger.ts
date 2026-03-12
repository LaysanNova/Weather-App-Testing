// import pino from 'pino';
//
// const isCI: boolean = process.env.CI === 'true';
//
// export const logger = pino(
//   isCI
//     ? { level: process.env.LOG_LEVEL || 'info' }
//     : {
//         level: process.env.LOG_LEVEL || 'debug',
//         transport: {
//           target: 'pino-pretty',
//           options: {
//             colorize: true,
//             translateTime: 'HH:MM:ss',
//             ignore: 'pid,hostname',
//           },
//         },
//       },
// );

import pino from 'pino';

export const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: {
    target: 'pino-pretty',
    options: { colorize: true },
  },
});
