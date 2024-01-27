import { getEnvString } from './utils';

export interface IConfigHttp {
	port: number;
}

export const http: IConfigHttp = {
	port: parseInt(getEnvString('HTTP_PORT'), 10),
};
