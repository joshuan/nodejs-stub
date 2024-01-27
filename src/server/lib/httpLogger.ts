import pinoHttp from 'pino-http';
import pino from 'pino';
import _ from 'lodash';

import config from '../../config';

import logger from './logger';

import type { Options } from 'pino-http';

const loggerConfig: Options = {
	logger,

	customSuccessMessage: (req, res, responseTime) => {
		// @ts-expect-error
		const url = req.originalUrl || req.url;

		return `[${req.id}] ${req.method} ${url} ${res.statusCode} ${responseTime}ms`;
	},
};

if (config.logger.format === 'line') {
	loggerConfig.serializers = {
		err: pino.stdSerializers.err,
		req: () => undefined,
		res: () => undefined,
		responseTime: () => undefined,
	};
}

export const httpLogger = pinoHttp(loggerConfig);
