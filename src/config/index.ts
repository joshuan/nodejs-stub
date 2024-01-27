import path from 'node:path';

import { getEnvWithValidate } from './utils';

const availableEnvs = ['development', 'production'] as const;

const NODE_ENV = getEnvWithValidate('NODE_ENV', availableEnvs);

// eslint-disable-next-line import/order
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });
dotenv.config({ path: path.resolve(process.cwd(), `configs/${NODE_ENV}.env`) });

import { http } from './http';
import { logger } from './logger';

export default {
	http,
	logger,
};
