import { getEnvString, getEnvWithValidate } from './utils';

export interface IConfigPg {
	host: string;
	port: number;
	username: string;
	password: string;
	database: string;
	logging: boolean;
}

export const pg: IConfigPg = {
	host: getEnvString('PG_HOST'),
	port: parseInt(getEnvString('PG_PORT'), 10),
	username: getEnvString('PG_USERNAME'),
	password: getEnvString('PG_PASSWORD'),
	database: getEnvString('PG_DATABASE'),
	logging: getEnvWithValidate('PG_LOGGING', ['true', 'false']) === 'true',
};
