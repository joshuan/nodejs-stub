import pino from 'pino';

import config from '../../config';

import type { LoggerOptions } from 'pino';

const loggerConfig: LoggerOptions = {};

if (config.logger.format === 'line') {
	loggerConfig.transport = {
		target: 'pino-pretty',
		options: {
			colorize: true,
		},
	};
}

if (config.logger.format === 'json') {
	const levelToLabel: Record<number, string> = {
		10: 'trace',
		20: 'debug',
		30: 'info',
		40: 'warn',
		50: 'error',
		60: 'fatal',
	};

	loggerConfig.formatters = {
		level(label, number) {
			return {
				level:
					number in levelToLabel
						? levelToLabel[number]
						: String(number),
			};
		},
	};
}

const logger = pino(loggerConfig);

export default logger;
