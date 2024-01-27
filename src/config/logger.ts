import { getEnvWithValidate } from './utils';

const formats = ['line', 'json'] as const;

export interface IConfigLogger {
	format: (typeof formats)[number];
}

export const logger: IConfigLogger = {
	format: getEnvWithValidate('LOGGER_FORMAT', formats),
};
