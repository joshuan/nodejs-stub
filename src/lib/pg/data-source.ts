import 'reflect-metadata';
import path from 'node:path';

import { DataSource, DefaultNamingStrategy } from 'typeorm';
import { snakeCase } from 'typeorm/util/StringUtils';

import config from '../../config';

import * as entities from './entities';

import type { NamingStrategyInterface } from 'typeorm';

class NamingStrategy
	extends DefaultNamingStrategy
	implements NamingStrategyInterface
{
	columnName(
		propertyName: string,
		customName: string,
		embeddedPrefixes: string[],
	): string {
		return snakeCase(
			embeddedPrefixes
				.concat(customName ? customName : propertyName)
				.join('_'),
		);
	}
}

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: config.pg.host,
	port: config.pg.port,
	username: config.pg.username,
	password: config.pg.password,
	database: config.pg.database,
	synchronize: true,
	logging: config.pg.logging,
	entities: Object.values(entities),
	subscribers: [],
	migrations: [path.join(__dirname, './migrations/**/*.ts')],
	namingStrategy: new NamingStrategy(),
});
