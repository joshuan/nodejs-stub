import { httpLogger } from '../lib/httpLogger';

import type { IncomingMessage, ServerResponse } from 'http';
import type { NextFunction } from 'express';

export function httpLoggerMiddleware(
	req: IncomingMessage,
	res: ServerResponse<IncomingMessage>,
	next: NextFunction,
) {
	httpLogger(req, res);
	next();
}
