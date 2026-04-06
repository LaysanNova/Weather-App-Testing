import dotenv from 'dotenv';
import path from 'path';

type Env = 'dev' | 'qa' | 'staging' | 'prod';

const CURRENT_ENV: Env = (process.env.ENV as Env) || 'dev';

const envFile = `.env.${CURRENT_ENV}`;
dotenv.config({
  path: path.resolve(process.cwd(), envFile),
});

function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`❌ Missing required env variable: ${name} in ${envFile}`);
  }
  return value;
}

export const config = {
  env: CURRENT_ENV,
  baseUrl: getEnvVar('BASE_URL'),
  user: {
    username: getEnvVar('USER_NAME'),
    password: getEnvVar('USER_PASSWORD'),
  },
} as const;
