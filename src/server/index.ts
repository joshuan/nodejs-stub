import path from 'node:path';

import dotenv from 'dotenv';
import express from 'express';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });
dotenv.config({ path: path.resolve(process.cwd(), 'configs/development.env') });

import config from '../config';

import app from './app';

app.use('/storage', express.static('.tmp/photos/storage'));

app.listen(config.http.port, () => {
	console.log(`Started on http://localhost:${config.http.port}/`);
});
