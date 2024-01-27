import { AppDataSource } from './data-source';

import type { DataSource } from 'typeorm';

let db: Promise<DataSource> | null = null;

export async function getDatabase() {
	if (db === null) {
		db = AppDataSource.initialize();
	}

	return db;
}
