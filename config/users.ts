import { CURRENT_ENV } from './env';

type User = { username: string; password: string };

const users: Record<string, User> = {
    dev: { username: 'dev_user', password: 'dev_pass' },
    staging: { username: 'staging_user', password: 'staging_pass' },
    prod: { username: 'prod_user', password: 'prod_pass' },
};

export const TEST_USER = users[CURRENT_ENV];