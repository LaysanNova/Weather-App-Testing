function getEnvVar(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`❌ Missing env variable: ${name}`);
    }
    return value;
}

export const config = {
    baseURL: getEnvVar('BASE_URL'),

    user: {
        username: getEnvVar('USER_NAME'),
        password: getEnvVar('USER_PASSWORD'),
    },

    api: {
        url: getEnvVar('API_URL'),
    },
} as const;