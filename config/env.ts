import dotenv from 'dotenv';
import path from 'path';

const envFile = `.env.${process.env.ENV || 'dev'}`;
dotenv.config({ path: path.resolve(__dirname, '..', envFile) });

if (!process.env.BASE_URL) {
    throw new Error(`BASE_URL is not defined in ${envFile}`);
}

export const BASE_URL = process.env.BASE_URL;
export const CURRENT_ENV = process.env.ENV || 'dev';
console.log(`Running tests on environment: ${CURRENT_ENV} → ${BASE_URL}`);